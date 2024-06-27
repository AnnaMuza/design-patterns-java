import java.util.HashMap;
import java.util.Map;

public class Client {

    public static void main(String[] args) {

        // Login and passwords for administrators
        Map<String, String> adminsAccounts = new HashMap<>();
        adminsAccounts.put("admin", "123qweASD");
        adminsAccounts.put("administrator", "1234");

        // Login and passwords for users
        Map<String, String> usersAccounts = new HashMap<>();
        usersAccounts.put("andrii", "1234");
        usersAccounts.put("black_knight", "S@ruman1");
        usersAccounts.put("white_knight", "ruman1");

        Account[] users = {
            Account.createAdmin("admin", "123qweASD"),
            Account.createAdmin("administrator", "1234"),
            Account.createUser("andrii", "1234"),
            Account.createGuest(),
            Account.createUser("black_knight", "S@ruman1"),
            Account.createUser("white_knight", "S111"),
            Account.createGuest(),
        };

        AuthenticationHandler guestHandler = new GuestAuthenticationHandler();
        AuthenticationHandler userHandler = new UserAuthenticationHandler();
        AuthenticationHandler adminHandler = new AdminAuthenticationHandler();

        guestHandler.setNextHandler(userHandler);
        userHandler.setNextHandler(adminHandler);

        for (Account user : users) {
            guestHandler.handleRequest(user, usersAccounts, adminsAccounts);
        }
    }
}
