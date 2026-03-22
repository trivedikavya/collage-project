# Quick Start Guide - Flutter TODO App

## ⚡ Getting Started (5 minutes)

### Step 1: Install Flutter
If you haven't installed Flutter yet, follow the official guide:
https://flutter.dev/docs/get-started/install

To verify Flutter is installed:
```bash
flutter --version
```

### Step 2: Navigate to Project
```bash
cd c:\Users\hp\OneDrive\Desktop\Flutter-TODO
```

### Step 3: Get Dependencies
```bash
flutter pub get
```

### Step 4: Run the App

**For Android/iOS:**
```bash
flutter run
```

**For specific platforms:**
```bash
flutter run -d windows    # Windows
flutter run -d macos      # macOS
flutter run -d web        # Web
flutter run -d linux      # Linux
```

**List available devices:**
```bash
flutter devices
```

---

## 📱 App Features

1. **Add Todo** - Tap the "Add Todo" FAB and enter title + description
2. **Complete Todo** - Check the checkbox next to any todo
3. **Edit Todo** - Tap the menu icon (⋮) and select "Edit"
4. **Delete Todo** - Tap menu icon and select "Delete" (with Undo option)
5. **Filter** - Use the filter menu in AppBar to view All, Active, or Completed todos
6. **Statistics** - See real-time count of Total, Active, and Done tasks

---

## 🛠️ Development

### Project Structure
```
lib/
├── main.dart               # App entry point
├── models/
│   └── todo.dart          # Todo model
├── screens/
│   └── home_screen.dart   # Main UI
└── widgets/
    ├── todo_item.dart     # Todo list item
    └── add_todo_dialog.dart # Add/Edit dialog
```

### Hot Reload during Development
While `flutter run` is active, press:
- **'r'** to hot reload
- **'R'** to hot restart
- **'q'** to quit

### Clean Build
```bash
flutter clean
flutter pub get
flutter run
```

---

## 📦 Dependencies

- `uuid: ^4.0.0` - For generating unique todo IDs

View all dependencies:
```bash
flutter pub deps
```

---

## 🐛 Troubleshooting

**Flutter not recognized?**
- Add Flutter to PATH: https://flutter.dev/docs/get-started/install

**Build errors?**
```bash
flutter clean
flutter pub get
flutter pub upgrade
```

**Device not showing up?**
```bash
flutter devices
# If empty, ensure:
# - Android Studio is installed (for Android)
# - Xcode is installed (for iOS)
# - A simulator/emulator is running or device is connected
```

---

## 📚 Learn More

- [Flutter Documentation](https://flutter.dev/docs)
- [Dart Documentation](https://dart.dev/guides)
- [Flutter Packages](https://pub.dev/packages)

---

## 💡 Tips

1. Use `const` constructors when possible for better performance
2. Hot reload to quickly test UI changes
3. Check console for helpful error messages
4. Use Flutter DevTools for debugging: `flutter pub global run devtools`

---

**Ready to go! Happy coding! 🚀**
