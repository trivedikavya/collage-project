# Flutter TODO App - Code Overview

## Architecture

The app follows a simple but effective structure:

### 1. **Models** (`lib/models/todo.dart`)
Defines the `Todo` data class with properties:
- `id` - Unique identifier (UUID)
- `title` - Task title (required)
- `description` - Additional details (optional)
- `isCompleted` - Completion status
- `createdAt` - Creation timestamp
- `dueDate` - Optional due date

### 2. **Screens** (`lib/screens/home_screen.dart`)
The main `HomeScreen` handles:
- Displaying list of todos
- Managing todo state (add, edit, delete, toggle)
- Filtering (All, Active, Completed)
- Showing statistics

### 3. **Widgets** (`lib/widgets/`)

#### `todo_item.dart`
Displays individual todo items with:
- Checkbox for completion status
- Title and description
- Popup menu for edit/delete actions
- Visual feedback (strikethrough for completed items)

#### `add_todo_dialog.dart`
Dialog for creating and editing todos:
- Title input (required)
- Description input (optional)
- Validation to ensure title is not empty
- Cancel and Add buttons

### 4. **Main App** (`lib/main.dart`)
Entry point configuring:
- Material Design theme
- Home screen route
- App title and theme colors

---

## Key Features Explained

### Adding a Todo
```dart
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
```

### Filtering Todos
```dart
List<Todo> getActiveTodos() {
  return todos.where((todo) => !todo.isCompleted).toList();
}

List<Todo> getCompletedTodos() {
  return todos.where((todo) => todo.isCompleted).toList();
}
```

### Toggle Todo Completion
```dart
setState(() {
  todo.toggleCompletion();
});
```

### Delete with Undo
```dart
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
```

---

## UI Components

### AppBar
- Title: "My TODO List"
- Filter menu with three options: All, Active, Completed
- Blue color scheme

### Statistics Card
Shows three metrics in a row:
- **Total** - All todos count (Blue)
- **Active** - Incomplete todos (Orange)
- **Done** - Completed todos (Green)

### Empty State
Displays when no todos match the current filter with:
- Icon indicating empty state
- Helpful message
- Encourages user to add todos

### Floating Action Button (FAB)
- Extended button with icon and label
- Text: "Add Todo"
- Color: Blue
- Opens the add todo dialog on tap

### Todo Item Card
Material Design card with:
- Checkbox (leading)
- Title and description (center)
- Popup menu (trailing)
- Strikethrough text for completed items

---

## State Management

The app uses Flutter's built-in `StatefulWidget` for state management:
- `HomeScreen` maintains the list of todos
- `setState()` triggers UI updates
- Simple but effective for small apps

For larger apps, consider:
- Provider package
- Riverpod
- GetX
- BLoC pattern

---

## Styling

The app uses Material Design 3 with:
- Color: Blue as primary color
- Material widgets (Card, ListTile, etc.)
- Proper spacing and padding
- Responsive layout

---

## Extending the App

### Add Local Storage
```dart
// Add these dependencies to pubspec.yaml
shared_preferences: ^2.0.0
// or
hive: ^2.0.0
```

### Add Firebase
```dart
firebase_core: ^2.0.0
cloud_firestore: ^4.0.0
```

### Add Notifications
```dart
flutter_local_notifications: ^14.0.0
```

### Add Dark Mode
```dart
// In main.dart
theme: ThemeData.light(),
darkTheme: ThemeData.dark(),
themeMode: ThemeMode.system,
```

---

## Testing Ideas

### Unit Tests
- Test Todo model methods
- Test filtering logic

### Widget Tests
- Test TodoItem widget rendering
- Test dialog input validation
- Test button actions

### Integration Tests
- Test complete user workflows
- Add → Complete → Delete flow

---

## Performance Tips

1. Use `const` constructors where possible
2. Use `const Key` for list items (helps with rebuilds)
3. Avoid unnecessary rebuilds with `RepaintBoundary`
4. For large lists, use `ListView.builder` instead of `ListView`
5. Implement `shouldRebuild` in CustomPainter

---

## Deployment

### Android
```bash
flutter build apk
# or for App Bundle
flutter build appbundle
```

### iOS
```bash
flutter build ios
```

### Web
```bash
flutter build web
```

### Windows
```bash
flutter build windows
```

---

**Happy coding! 🚀**
