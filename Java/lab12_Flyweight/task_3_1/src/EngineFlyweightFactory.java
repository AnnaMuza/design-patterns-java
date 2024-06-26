package task_3_1.src;

import java.util.HashMap;
import java.util.Map;

public class EngineFlyweightFactory {
    private final Map<String, Engine> engineCache = new HashMap<>();

    public Engine getEngine(int power, Engine.Fuel fuel) {
        String key = power + fuel.toString();
        Engine engine = engineCache.get(key);
        
        if (engine == null) {
            engine = new Engine(power, fuel);
            engineCache.put(key, engine);
        }

        return engine;
    }
}
