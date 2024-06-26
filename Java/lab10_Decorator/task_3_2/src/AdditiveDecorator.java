package task_3_2.src;

abstract public class AdditiveDecorator extends Beverage {

    final protected Beverage wrapper;

    public AdditiveDecorator(Beverage beverage) {
        this.wrapper = beverage;
    }
}
