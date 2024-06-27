public class AdditionHandler extends OperationHandler {
    @Override
    public double handle(String operation, double a, double b) {
        if (operation.equals("+")) {
            return a + b;
        } else if (nextHandler != null) {
            return nextHandler.handle(operation, a, b);
        }
        return 0;
    }
}
