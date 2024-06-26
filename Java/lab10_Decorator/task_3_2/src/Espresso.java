package task_3_2.src;

public class Espresso extends Beverage {
    @Override
    public String description() {
        return "Espresso";
    }

    @Override
    public float cost() {
        return 0.75f;
    }
}
