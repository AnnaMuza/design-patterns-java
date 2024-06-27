public interface Mediator {
    void notify(Event event, int planeId);
}

enum Event {
    TAKE_OFF,
    LAND
}
