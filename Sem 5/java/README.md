# 🧾 BANK ACCOUNT MANAGEMENT SYSTEM

## 🎯 Title of the Project
**Bank Account Management System**

---

## 🧠 Objective / Aim
The main objective of the **Bank Account Management System** is to develop a simple **console-based Java application** that manages customer bank accounts efficiently.  
It enables users to create new accounts, deposit and withdraw money, check balances, and display all existing account details — using the concepts of **Object-Oriented Programming (OOP)** and **File Handling** in Core Java.

---

## 📋 Abstract
The **Bank Account Management System** is a console-based application designed to handle basic banking operations digitally.  
It eliminates the need for manual record keeping and provides an easy, fast, and reliable way to manage account-related activities.  

This project is developed using **Core Java** and implements **Serialization** for persistent storage, ensuring that account data remains saved even after program termination.  
It demonstrates practical use of classes, objects, methods, and file input/output streams.

---

## 🧩 Problem Definition
In traditional banking systems, customer data and transactions are often maintained manually or through outdated software, which can lead to **data redundancy, errors, and inefficiency**.  
This project aims to provide a computerized solution that performs banking operations like **account creation, deposit, withdrawal, and balance inquiry** in a secure and organized manner.

---

## 🌍 Scope
The system is designed as a basic simulation of real-world banking operations for learning and demonstration purposes.  
It covers all the essential features of a small-scale banking application and can be extended in the future with **GUI** or **database integration**.  

The project is suitable for:
- Academic use  
- Core Java training  
- Demonstration of file handling and OOP concepts  

---

## ⚙️ Modules / Functionalities
1. **Account Creation Module** – Creates a new bank account by taking user details.  
2. **Deposit Module** – Allows users to deposit money into an existing account.  
3. **Withdrawal Module** – Enables secure withdrawal of funds.  
4. **Balance Inquiry Module** – Displays the current balance of an account.  
5. **Account Listing Module** – Displays details of all accounts stored.  
6. **File Handling Module** – Saves and retrieves account data using serialization.  
7. **Exit Module** – Exits safely while saving all data.

---

## 🔁 Algorithm / Flowchart

### **Algorithm**
1. Start the program  
2. Load existing accounts from file  
3. Display the main menu  
4. Ask user for a choice (Create, Deposit, Withdraw, etc.)  
5. Based on choice:  
   - **Create** → Take user input and store account object  
   - **Deposit** → Search account and add balance  
   - **Withdraw** → Validate and subtract balance  
   - **Check Balance** → Display account info  
   - **View All** → Display all accounts  
   - **Exit** → Save data to file  
6. Repeat until the user exits  
7. Stop the program

---



## 💻 Hardware & Software Requirements

### **Hardware Requirements**
- Processor: Intel Core i3 or above  
- RAM: Minimum 4 GB  
- Hard Disk: 100 MB free space  

### **Software Requirements**
- Operating System: Windows / Linux  
- IDE: Eclipse / NetBeans / IntelliJ IDEA / VS Code  
- JDK Version: Java SE 8 or above  

---

## 🧩 Implementation (Source Code)
Refer to the attached code section or appendix in your printout.  

👉 File Name: `BankAccountManagementSystem.java`

---

## 🖥️ Output Screenshots (Sample Console Output)

```
=== BANK ACCOUNT MANAGEMENT SYSTEM ===

Create Account

Deposit Money

Withdraw Money

Check Balance

View All Accounts

Exit

Enter your choice: 1
Enter Account Number: 1001
Enter Account Holder Name: Kavya
Enter Initial Deposit Amount: 5000
Account created successfully!

Enter your choice: 2
Enter Account Number: 1001
Enter Amount to Deposit: 1500
₹1500 deposited successfully!

Enter your choice: 4
Enter Account Number: 1001
Current Balance: ₹6500
```


---

## 📊 Results / Discussion
The program successfully demonstrates all required banking operations through a simple **command-line interface**.  
User inputs are validated properly, and account details are stored persistently using **Java file handling**.  

This project effectively showcases OOP principles like:
- **Encapsulation**
- **Abstraction**
- **Data Persistence**

---

## 💡 Applications
- Academic learning of Java fundamentals  
- Demonstration of file handling and serialization  
- Prototype for small cooperative banks or ERP demos  
- Base for GUI or web-based banking systems  

---

## 🚀 Future Enhancements
- Integration with **MySQL Database** instead of file storage  
- Addition of a **Graphical User Interface (GUI)** using JavaFX or Swing  
- **User Authentication (Login System)** for security  
- Generate **PDF receipts** for transactions  
- Add **interest calculation** and **loan management modules**  

---

## ✅ Conclusion
The **Bank Account Management System** project successfully fulfills the goal of managing customer accounts digitally using **Core Java**.  
It combines simplicity, functionality, and practical implementation of OOP and File Handling concepts.  
The project can be easily enhanced into a **professional-grade banking application** by adding GUI and database connectivity.

---

## 📚 References
- *Java: The Complete Reference* – Herbert Schildt  
- *Head First Java* – Kathy Sierra & Bert Bates  
- Oracle Java Documentation: [https://docs.oracle.com/javase/](https://docs.oracle.com/javase/)  
- GeeksforGeeks Java Tutorials: [https://www.geeksforgeeks.org/java/](https://www.geeksforgeeks.org/java/)

---
