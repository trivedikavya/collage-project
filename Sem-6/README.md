# Flutter TODO App

A beautiful and functional TODO application built with Flutter. This app helps you manage your daily tasks efficiently with an intuitive and clean user interface.

## Features

- ✅ **Add Todos** - Create new tasks with title and description
- ✏️ **Edit Todos** - Modify existing tasks anytime
- ✓ **Mark Complete** - Check off completed tasks
- 🗑️ **Delete Todos** - Remove tasks with undo option
- 🔍 **Filter** - View all, active, or completed todos
- 📊 **Statistics** - See total, active, and completed tasks count
- 💾 **Quick Actions** - PopupMenu for edit and delete options
- 🎨 **Beautiful UI** - Material Design with smooth interactions

## Project Structure

```
lib/
├── main.dart                 # App entry point
├── models/
│   └── todo.dart            # Todo model class
├── screens/
│   └── home_screen.dart     # Main home screen
└── widgets/
    ├── todo_item.dart       # Individual todo item widget
    └── add_todo_dialog.dart # Dialog for adding/editing todos
```

## Getting Started

### Prerequisites

- Flutter SDK (3.0.0 or higher)
- Dart SDK (3.0.0 or higher)

### Installation

1. **Install Flutter** (if not already installed)
   ```bash
   # Follow the official Flutter installation guide:
   # https://flutter.dev/docs/get-started/install
   ```

2. **Clone or navigate to the project**
   ```bash
   cd Flutter-TODO
   ```

3. **Get dependencies**
   ```bash
   flutter pub get
   ```

4. **Run the app**
   ```bash
   flutter run
   ```

## Usage

### Adding a Todo
1. Tap the **"Add Todo"** button (FAB) at the bottom right
2. Enter the todo title (required) and description (optional)
3. Tap **"Add"** to create the todo

### Editing a Todo
1. Tap the **menu icon** (three dots) on a todo item
2. Select **"Edit"**
3. Modify the title or description
4. Tap **"Add"** to save changes

### Completing a Todo
- Tap the **checkbox** next to a todo to mark it as complete
- Completed todos show a strikethrough and gray text

### Deleting a Todo
1. Tap the **menu icon** (three dots) on a todo item
2. Select **"Delete"**
3. Use the **"Undo"** option to restore if deleted by mistake

### Filtering Todos
- Tap the **filter icon** in the AppBar
- Select filter: **All**, **Active**, or **Completed**
- The statistics widget updates in real-time

## Dependencies

- `flutter` - Flutter SDK framework
- `cupertino_icons` - iOS style icons
- `uuid` - Generate unique IDs for todos

## Code Architecture

### Models
- **Todo** - Represents a single todo item with properties like id, title, description, completion status, and dates

### Screens
- **HomeScreen** - Main screen displaying the todo list with filtering options and statistics

### Widgets
- **TodoItem** - Reusable widget for displaying individual todo items
- **AddTodoDialog** - Dialog for creating and editing todos

## Future Enhancements

- 💾 Local storage persistence
- 🔔 Push notifications for reminders
- 📅 Due date management with calendar picker
- 🏷️ Categories and tags
- 🌙 Dark mode support
- 📤 Cloud sync
- 🎯 Priority levels
- 📊 Advanced statistics and charts

## License

This project is open source and available under the MIT License.

## Support

For issues or feature requests, feel free to open an issue in the repository.

---

Happy organizing! 🚀
