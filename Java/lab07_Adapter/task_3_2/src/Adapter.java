import java.util.Locale;

public class Adapter implements Customs {

    private float taxRate = 0.15f;
    private float usdToUah = 40;

    public Adapter(float taxRate, float usdToUah) {
        this.taxRate = taxRate;
        this.usdToUah = usdToUah;
    }

    public Adapter() {
    }

    @Override
    public float vehiclePrice(Auto auto) {
        Vehicle vehicle;
        VehicleCalculator vehicleCalculator;

        if (auto.model.equalsIgnoreCase("truck")) {
            vehicle = new Truck(auto.age, auto.mileage);
            vehicleCalculator = new TruckCalculator();
        } else {
            vehicle = new Car(auto.age, auto.model, auto.damaged ? 1.0f : 0.0f);
            vehicleCalculator = new CarCalculator();
        }

        vehicleCalculator.setVehicle(vehicle);
        String priceInUsd = vehicleCalculator.calculatePrice();

        return priceInUah(priceInUsd);
    }

    @Override
    public float tax(Auto auto) {
        return vehiclePrice(auto) * taxRate;
    }

    private float priceInUah(String priceInUsd) {
        priceInUsd = priceInUsd.replace("USD", "").trim();
        return Float.parseFloat(priceInUsd) * usdToUah;
    }
}
