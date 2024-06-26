package task_3_2.src;

public class Milk extends AdditiveDecorator {
    public Milk(Beverage beverage) {
        super(beverage);
    }

    @Override
    public String description() {
        return wrapper.description() + ", Milk";
    }

    @Override
    public float cost() {
        return wrapper.cost() + 0.2f;
    }
}
