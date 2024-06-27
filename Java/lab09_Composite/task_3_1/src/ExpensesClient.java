package task_3_1.src;

public class ExpensesClient {
  public static void main(String[] args) {
    Manager director = new Manager("Director", 1000);

    Manager meatManager = new Manager("Meat Department Manager", 500);
    Salesperson meatSeller1 = new Salesperson("Meat Seller 1", 200, meatManager);
    Salesperson meatSeller2 = new Salesperson("Meat Seller 2", 200, meatManager);
    Salesperson meatSeller3 = new Salesperson("Meat Seller 3", 200, meatManager);

    Department meatDepartment = new Department();
    meatDepartment.addEmployee(meatManager);
    meatDepartment.addEmployee(meatSeller1);
    meatDepartment.addEmployee(meatSeller2);
    meatDepartment.addEmployee(meatSeller3);

    Manager dairyManager = new Manager("Dairy Department Manager", 500);
    Salesperson dairySeller1 = new Salesperson("Dairy Seller 1", 200, dairyManager);
    Salesperson dairySeller2 = new Salesperson("Dairy Seller 2", 200, dairyManager);
    Salesperson dairySeller3 = new Salesperson("Dairy Seller 3", 200, dairyManager);

    Department dairyDepartment = new Department();
    dairyDepartment.addEmployee(dairyManager);
    dairyDepartment.addEmployee(dairySeller1);
    dairyDepartment.addEmployee(dairySeller2);
    dairyDepartment.addEmployee(dairySeller3);

    Manager bakeryManager = new Manager("Bakery Department Manager", 500);
    Salesperson bakerySeller1 = new Salesperson("Bakery Seller 1", 200, bakeryManager);
    Salesperson bakerySeller2 = new Salesperson("Bakery Seller 2", 200, bakeryManager);
    Salesperson bakerySeller3 = new Salesperson("Bakery Seller 3", 200, bakeryManager);

    Department bakeryDepartment = new Department();
    bakeryDepartment.addEmployee(bakeryManager);
    bakeryDepartment.addEmployee(bakerySeller1);
    bakeryDepartment.addEmployee(bakerySeller2);
    bakeryDepartment.addEmployee(bakerySeller3);

    Department store = new Department();
    store.addEmployee(director);
    store.addEmployee(meatDepartment);
    store.addEmployee(dairyDepartment);
    store.addEmployee(bakeryDepartment);

    payExpenses(store);
  }

  private static void payExpenses(Employee employee) {
    System.out.println("Expenses have been requested");
    employee.payExpenses();
    System.out.println("Expenses have been paid\n");
  }
}
