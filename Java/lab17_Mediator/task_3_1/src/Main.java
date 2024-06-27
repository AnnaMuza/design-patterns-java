public class Main {

  public static void main(String[] args) {
    FlightControlMediator mediator = new FlightControlMediator();
    Plane plane = new Plane(123, mediator);
    plane.takeOff();
  }

}
