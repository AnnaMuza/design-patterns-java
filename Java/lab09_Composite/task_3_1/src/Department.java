package task_3_1.src;

import java.util.ArrayList;
import java.util.List;

public class Department implements Employee {
  private final List<Employee> employees = new ArrayList<>();

  public void addEmployee(Employee employee) {
      employees.add(employee);
  }

  @Override
  public void payExpenses() {
      for (Employee employee : employees) {
          employee.payExpenses();
      }
  }
}
