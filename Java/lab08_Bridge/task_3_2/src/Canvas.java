package task_3_2.src;

public class Canvas {

  public static void main(String[] args) {

    CheckboxButton checkboxButton = new CheckboxButton(new SmallSize());
    checkboxButton.draw();

    RadioButton radioButton = new RadioButton(new MediumSize());
    radioButton.draw();

    DropdownButton dropdownButton = new DropdownButton(new LargeSize());
    dropdownButton.draw();

    ImageButton imageButton = new ImageButton(new UserSize(100, 100));
    imageButton.draw();

  }

}
