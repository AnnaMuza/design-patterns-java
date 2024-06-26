package task_3_2.src;

public class Main {

    public static void main(String[] args) {

        // Espresso with two sugars
        Beverage espresso = new Espresso();
        espresso = new Sugar(espresso);
        espresso = new Sugar(espresso);
        System.out.println(espresso);

        // Coffee with whipped cream and two sugars
        Beverage darkRoast = new DarkRoast();
        darkRoast = new WhippedCream(darkRoast);
        darkRoast = new Sugar(darkRoast);
        darkRoast = new Sugar(darkRoast);
        System.out.println(darkRoast);

        // Coffee with cream and a portion of sugar
        Beverage darkRoast2 = new DarkRoast();
        darkRoast2 = new Cream(darkRoast2);
        darkRoast2 = new Sugar(darkRoast2);
        System.out.println(darkRoast2);

        // Decaffeinated coffee with milk and two sugars
        Beverage decaf = new Decaf();
        decaf = new Milk(decaf);
        decaf = new Sugar(decaf);
        decaf = new Sugar(decaf);
        System.out.println(decaf);
    }
}
