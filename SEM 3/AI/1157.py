# Automated Loan Eligibility Predictor AI PROJECT of KAVYA TRIVEDI (3rd sem JG UNI)
#Name:- KAVYA TRIVEDI
#ROLL-NO:-1157 
#this project is of kavya trivedi


def get_user_input():
    """Function to collect user input from the console."""
    print("Welcome to Loan Eligibility Predictor made by KAVYA TRIVEDI!\n")
    try:
        income = float(input("Enter Applicant's Monthly Income: "))
        loan_amount = float(input("Enter Loan Amount Requested: "))
        credit_score = int(input("Enter Credit Score (300-850): "))
        employment_status = input("Are you employed? (yes/no): ").strip().lower()

        # Ensure valid inputs
        if credit_score < 300 or credit_score > 850:
            print("Credit score must be between 300 and 850.")
            return None
        if employment_status not in ['yes', 'no']:
            print("Employment status must be 'yes' or 'no'.")
            return None
        
        return {
            "income": income,
            "loan_amount": loan_amount,
            "credit_score": credit_score,
            "employment_status": employment_status
        }
    except ValueError:
        print("Invalid input. Please enter numeric values where required.")
        return None
#this project is of kavya trivedi

def evaluate_loan_eligibility(data):
    """Function to determine loan eligibility based on simple rules."""
    if data['credit_score'] >= 700 and data['income'] > data['loan_amount'] and data['employment_status'] == 'yes':
        return True  # Loan Approved
    else:
        return False  # Loan Rejected 
#this project is of kavya trivedi

def post_approval_steps():
    """Collects account number and email if the loan is approved."""
    try:
        account_number = input("Enter your bank account number: ").strip()
        email_id = input("Enter your email ID: ").strip()
        print("\nCongratulations! Your loan is approved.")
        print(f"Account Number: {account_number}")
        print(f"Email ID: {email_id}")
        print("\nYou will receive an email from us shortly for verification. Once verified,")
        print("your loan amount will be credited to your bank account at a 10% interest rate.")
    except Exception as e:
        print(f"An error occurred during post-approval steps: {e}")

#this project is of kavya trivedi
def main():
    """Main function to run the loan eligibility predictor."""
    print("===== Automated Loan Eligibility Predictor project of KAVYA TRIVEDI=====")
    user_data = get_user_input()
    
    if user_data:
        is_approved = evaluate_loan_eligibility(user_data)
        if is_approved:
            print("\nResult: Loan Approved")
            post_approval_steps()
        else:
            print("\nResult: Loan Rejected")
            print("Unfortunately, you are not eligible for the loan at this time.")
    else:
        print("Could not evaluate loan eligibility due to invalid input.")
#this project is of kavya trivedi

if __name__ == "__main__":
    main()
