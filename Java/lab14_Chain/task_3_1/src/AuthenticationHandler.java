import java.util.Map;

public abstract class AuthenticationHandler {
    protected AuthenticationHandler nextHandler;

    public void setNextHandler(AuthenticationHandler nextHandler) {
        this.nextHandler = nextHandler;
    }

    public abstract void handleRequest(Account account, Map<String, String> userCredentials, Map<String, String> adminCredentials);
}
