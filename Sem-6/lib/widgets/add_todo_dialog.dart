import 'package:flutter/material.dart';

class AddTodoDialog extends StatefulWidget {
  final String? initialTitle;
  final String? initialDescription;
  final VoidCallback? onCancel;

  const AddTodoDialog({
    Key? key,
    this.initialTitle,
    this.initialDescription,
    this.onCancel,
  }) : super(key: key);

  @override
  State<AddTodoDialog> createState() => _AddTodoDialogState();
}

class _AddTodoDialogState extends State<AddTodoDialog> {
  late TextEditingController titleController;
  late TextEditingController descController;

  @override
  void initState() {
    super.initState();
    titleController = TextEditingController(text: widget.initialTitle ?? '');
    descController =
        TextEditingController(text: widget.initialDescription ?? '');
  }

  @override
  void dispose() {
    titleController.dispose();
    descController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text('Add Todo'),
      content: SingleChildScrollView(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            TextField(
              controller: titleController,
              decoration: const InputDecoration(
                hintText: 'Enter todo title',
                border: OutlineInputBorder(),
                labelText: 'Title',
              ),
            ),
            const SizedBox(height: 16),
            TextField(
              controller: descController,
              decoration: const InputDecoration(
                hintText: 'Enter description (optional)',
                border: OutlineInputBorder(),
                labelText: 'Description',
              ),
              maxLines: 3,
            ),
          ],
        ),
      ),
      actions: [
        TextButton(
          onPressed: () {
            widget.onCancel?.call();
            Navigator.pop(context);
          },
          child: const Text('Cancel'),
        ),
        ElevatedButton(
          onPressed: () {
            if (titleController.text.isNotEmpty) {
              Navigator.pop(context, {
                'title': titleController.text,
                'description': descController.text,
              });
            } else {
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(content: Text('Please enter a title')),
              );
            }
          },
          child: const Text('Add'),
        ),
      ],
    );
  }
}
