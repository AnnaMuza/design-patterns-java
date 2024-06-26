package task_3_2.src;

public abstract class Button {
    protected final Size size;

    public Button(Size size) {
        this.size = size;
    }

    abstract void draw();

}
