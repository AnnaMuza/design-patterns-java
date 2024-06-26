import com.vehiclecalculator.CarCalculator;
import com.vehiclecalculator.Vehicle;
import com.vehiclecalculator.VehicleCalculator;

public class Main {
    public static void main(String[] args) {
        Vehicle vehicle = new Vehicle(5, "Audi", 0.2f, 100_000);
        VehicleCalculator calculator = new CarCalculator();
        calculator.setVehicle(vehicle);
        System.out.println(calculator.calculatePrice());

        Adapter adapter = new Adapter();
        Auto auto = new Auto(5, "Audi", true, 100_000);
        System.out.println("UAH: " + adapter.vehiclePrice(auto));
        System.out.println("Tax: " + adapter.tax(auto));
        System.out.println("Total price: " + (adapter.vehiclePrice(auto) + adapter.tax(auto)));
    }
}
