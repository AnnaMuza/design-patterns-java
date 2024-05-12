import {ConcreteCreator2} from "./ConcreteCreator2.class";
import {ConcreteCreator1} from "./ConcreteCreator1.class";

const creator1 = new ConcreteCreator1();
creator1.someOperation();

const creator2 = new ConcreteCreator2();
creator2.someOperation();