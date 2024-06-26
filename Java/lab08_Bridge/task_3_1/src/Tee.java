package task_3_1.src;

public abstract class Tee extends Beverage {
    public Tee(int sugar, BeverageType type) {
        super(sugar, type);
    }

    @Override
    public void prepare() {
        System.out.println("Put some tee...");
    }

    @Override
    public int cost() {
        return 7;
    }
}
