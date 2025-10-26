import java.io.*;
import java.util.*;

// Class representing a Bank Account
class BankAccount implements Serializable {
    private static final long serialVersionUID = 1L;
    private int accountNumber;
    private String holderName;
    private double balance;

    public BankAccount(int accountNumber, String holderName, double balance) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;
    }

    public int getAccountNumber() {
        return accountNumber;
    }

    public String getHolderName() {
        return holderName;
    }

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("₹" + amount + " deposited successfully!");
        } else {
            System.out.println("Invalid deposit amount.");
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("₹" + amount + " withdrawn successfully!");
        } else {
            System.out.println("Insufficient balance or invalid amount.");
        }
    }

    @Override
    public String toString() {
        return "Account No: " + accountNumber + 
               " | Holder: " + holderName + 
               " | Balance: ₹" + balance;
    }
}

// Main System Class
public class BankAccountManagementSystem {
    private static final String FILE_NAME = "accounts.dat";
    private static ArrayList<BankAccount> accounts = new ArrayList<>();
    private static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {
        loadAccounts();
        int choice;

        do {
            System.out.println("\n=== BANK ACCOUNT MANAGEMENT SYSTEM ===");
            System.out.println("1. Create Account");
            System.out.println("2. Deposit Money");
            System.out.println("3. Withdraw Money");
            System.out.println("4. Check Balance");
            System.out.println("5. View All Accounts");
            System.out.println("6. Exit");
            System.out.print("Enter your choice: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    createAccount();
                    break;
                case 2:
                    depositMoney();
                    break;
                case 3:
                    withdrawMoney();
                    break;
                case 4:
                    checkBalance();
                    break;
                case 5:
                    viewAllAccounts();
                    break;
                case 6:
                    saveAccounts();
                    System.out.println("Thank you for using the system. Goodbye!");
                    break;
                default:
                    System.out.println("Invalid choice! Please try again.");
            }
        } while (choice != 6);
    }

    // Create new account
    private static void createAccount() {
        System.out.print("Enter Account Number: ");
        int accNo = sc.nextInt();
        sc.nextLine(); // consume newline
        System.out.print("Enter Account Holder Name: ");
        String name = sc.nextLine();
        System.out.print("Enter Initial Deposit Amount: ");
        double amount = sc.nextDouble();

        BankAccount account = new BankAccount(accNo, name, amount);
        accounts.add(account);
        System.out.println("Account created successfully!");
    }

    // Deposit money
    private static void depositMoney() {
        System.out.print("Enter Account Number: ");
        int accNo = sc.nextInt();
        BankAccount account = findAccount(accNo);
        if (account != null) {
            System.out.print("Enter Amount to Deposit: ");
            double amount = sc.nextDouble();
            account.deposit(amount);
        } else {
            System.out.println("Account not found!");
        }
    }

    // Withdraw money
    private static void withdrawMoney() {
        System.out.print("Enter Account Number: ");
        int accNo = sc.nextInt();
        BankAccount account = findAccount(accNo);
        if (account != null) {
            System.out.print("Enter Amount to Withdraw: ");
            double amount = sc.nextDouble();
            account.withdraw(amount);
        } else {
            System.out.println("Account not found!");
        }
    }

    // Check account balance
    private static void checkBalance() {
        System.out.print("Enter Account Number: ");
        int accNo = sc.nextInt();
        BankAccount account = findAccount(accNo);
        if (account != null) {
            System.out.println("Current Balance: ₹" + account.getBalance());
        } else {
            System.out.println("Account not found!");
        }
    }

    // View all accounts
    private static void viewAllAccounts() {
        if (accounts.isEmpty()) {
            System.out.println("No accounts available!");
        } else {
            System.out.println("\n--- All Accounts ---");
            for (BankAccount account : accounts) {
                System.out.println(account);
            }
        }
    }

    // Find account by number
    private static BankAccount findAccount(int accNo) {
        for (BankAccount acc : accounts) {
            if (acc.getAccountNumber() == accNo)
                return acc;
        }
        return null;
    }

    // Load accounts from file
    @SuppressWarnings("unchecked")
    private static void loadAccounts() {
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(FILE_NAME))) {
            accounts = (ArrayList<BankAccount>) ois.readObject();
        } catch (Exception e) {
            accounts = new ArrayList<>();
        }
    }

    // Save accounts to file
    private static void saveAccounts() {
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(FILE_NAME))) {
            oos.writeObject(accounts);
        } catch (IOException e) {
            System.out.println("Error saving accounts.");
        }
    }
}
