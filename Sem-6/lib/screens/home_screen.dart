import 'package:flutter/material.dart';
import 'package:uuid/uuid.dart';
import '../models/todo.dart';
import '../widgets/todo_item.dart';
import '../widgets/add_todo_dialog.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final List<Todo> todos = [];
  final Uuid uuid = const Uuid();
  String filterType = 'all'; // all, active, completed

  @override
  Widget build(BuildContext context) {
    List<Todo> displayedTodos = getFilteredTodos();

    return Scaffold(
      appBar: AppBar(
        title: const Text('My TODO List'),
        elevation: 0,
        backgroundColor: Colors.blue[600],
        actions: [
          PopupMenuButton(
            onSelected: (value) {
              setState(() {
                filterType = value;
              });
            },
            itemBuilder: (BuildContext context) => [
              PopupMenuItem(
                value: 'all',
                child: Row(
                  children: [
                    Icon(
                      Icons.list,
                      color: filterType == 'all' ? Colors.blue : Colors.grey,
                    ),
                    const SizedBox(width: 8),
                    const Text('All'),
                  ],
                ),
              ),
              PopupMenuItem(
                value: 'active',
                child: Row(
                  children: [
                    Icon(
                      Icons.assignment,
                      color:
                          filterType == 'active' ? Colors.blue : Colors.grey,
                    ),
                    const SizedBox(width: 8),
                    const Text('Active'),
                  ],
                ),
              ),
              PopupMenuItem(
                value: 'completed',
                child: Row(
                  children: [
                    Icon(
                      Icons.check_circle,
                      color: filterType == 'completed'
                          ? Colors.blue
                          : Colors.grey,
                    ),
                    const SizedBox(width: 8),
                    const Text('Completed'),
                  ],
                ),
              ),
            ],
          ),
        ],
      ),
      body: Column(
        children: [
          Container(
            padding: const EdgeInsets.all(16),
            color: Colors.blue[50],
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                _buildStatCard('Total', todos.length.toString(), Colors.blue),
                _buildStatCard('Active', getActiveTodos().length.toString(),
                    Colors.orange),
                _buildStatCard('Done', getCompletedTodos().length.toString(),
                    Colors.green),
              ],
            ),
          ),
          Expanded(
            child: displayedTodos.isEmpty
                ? Center(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(Icons.checkmark_circle_outline,
                            size: 60, color: Colors.grey[400]),
                        const SizedBox(height: 16),
                        Text(
                          filterType == 'completed'
                              ? 'No completed todos yet!'
                              : filterType == 'active'
                                  ? 'No active todos!'
                                  : 'No todos yet!',
                          style: TextStyle(
                            fontSize: 16,
                            color: Colors.grey[600],
                          ),
                        ),
                      ],
                    ),
                  )
                : ListView.builder(
                    itemCount: displayedTodos.length,
                    itemBuilder: (context, index) {
                      final todo = displayedTodos[index];
                      return TodoItem(
                        todo: todo,
                        onToggle: () {
                          setState(() {
                            todo.toggleCompletion();
                          });
                        },
                        onDelete: () {
                          setState(() {
                            todos.remove(todo);
                          });
                          ScaffoldMessenger.of(context).showSnackBar(
                            SnackBar(
                              content: const Text('Todo deleted'),
                              action: SnackBarAction(
                                label: 'Undo',
                                onPressed: () {
                                  setState(() {
                                    todos.add(todo);
                                  });
                                },
                              ),
                            ),
                          );
                        },
                        onEdit: () async {
                          final result = await showDialog(
                            context: context,
                            builder: (context) => AddTodoDialog(
                              initialTitle: todo.title,
                              initialDescription: todo.description,
                            ),
                          );
                          if (result != null) {
                            setState(() {
                              todo.title = result['title'];
                              todo.description = result['description'];
                            });
                          }
                        },
                      );
                    },
                  ),
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: () async {
          final result = await showDialog(
            context: context,
            builder: (context) => const AddTodoDialog(),
          );
          if (result != null) {
            setState(() {
              todos.add(
                Todo(
                  id: uuid.v4(),
                  title: result['title'],
                  description: result['description'],
                  createdAt: DateTime.now(),
                ),
              );
            });
          }
        },
        icon: const Icon(Icons.add),
        label: const Text('Add Todo'),
        backgroundColor: Colors.blue[600],
      ),
    );
  }

  List<Todo> getFilteredTodos() {
    switch (filterType) {
      case 'active':
        return getActiveTodos();
      case 'completed':
        return getCompletedTodos();
      default:
        return todos;
    }
  }

  List<Todo> getActiveTodos() {
    return todos.where((todo) => !todo.isCompleted).toList();
  }

  List<Todo> getCompletedTodos() {
    return todos.where((todo) => todo.isCompleted).toList();
  }

  Widget _buildStatCard(String label, String value, Color color) {
    return Column(
      children: [
        Text(
          value,
          style: TextStyle(
            fontSize: 24,
            fontWeight: FontWeight.bold,
            color: color,
          ),
        ),
        const SizedBox(height: 4),
        Text(
          label,
          style: TextStyle(
            fontSize: 12,
            color: Colors.grey[600],
          ),
        ),
      ],
    );
  }
}
