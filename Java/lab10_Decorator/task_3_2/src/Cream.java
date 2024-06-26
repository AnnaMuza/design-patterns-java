package task_3_2.src;

public class Cream extends AdditiveDecorator {
    public Cream(Beverage beverage) {
        super(beverage);
    }

    @Override
    public String description() {
        return wrapper.description() + ", Cream";
    }

    @Override
    public float cost() {
        return wrapper.cost() + 0.3f;
    }
}
