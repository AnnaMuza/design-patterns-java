package task_3_1.src;

public class Cafe {

    public static void main(String[] args) {
        BlackChocolate blackChocolate = new BlackChocolate(3, new RestaurantBeverage(), 200);
        BlackCoffee blackCoffee = new BlackCoffee(3, new RestaurantBeverage(), 200, true);
        BlackTee blackTee = new BlackTee(0, new RestaurantBeverage(), 300);

        beverageInfo(blackChocolate);
        beverageInfo(blackCoffee);
        beverageInfo(blackTee);

        MilkChocolate milkChocolate = new MilkChocolate(3, new TakeawayBeverage(), 200);
        CoffeeWithMilk coffeeWithMilk = new CoffeeWithMilk(3, new TakeawayBeverage(), 200);
        TeeWithMilk teeWithMilk = new TeeWithMilk(2, new TakeawayBeverage(), 300);

        beverageInfo(milkChocolate);
        beverageInfo(coffeeWithMilk);
        beverageInfo(teeWithMilk);
    }

    private static void beverageInfo(Beverage beverage) {

        System.out.println("=========================");

        beverage.prepare();
        System.out.printf("Cost of beverage: %s grn\n",  beverage.cost());
        beverage.drink();
    }

}
