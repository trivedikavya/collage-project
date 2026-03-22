class Todo {
  final String id;
  final String title;
  final String description;
  bool isCompleted;
  final DateTime createdAt;
  DateTime? dueDate;

  Todo({
    required this.id,
    required this.title,
    this.description = '',
    this.isCompleted = false,
    required this.createdAt,
    this.dueDate,
  });

  void toggleCompletion() {
    isCompleted = !isCompleted;
  }

  @override
  String toString() => 'Todo(id: $id, title: $title, isCompleted: $isCompleted)';
}
