import java.util.ArrayList;

class VoiceMessageTest{
    public static void main(String[] args){
        System.out.println("Hello World");
        VoiceMessageUtil answeringMachine = new VoiceMessageUtil();
        System.out.println(answeringMachine.greeting());
        System.out.println(answeringMachine.greeting("Pepper"));
        System.out.println(answeringMachine.greeting(5));

        // Type Casting
        int days = 7;
        double cost= 10.01;
        // implicit casting int --> double
        double doubleDay = days;
        System.out.println(doubleDay);
        double totalCost = cost * days; // works because double * int is still a double
        System.out.println(totalCost);
        int roundOfTotalCost = (int)cost * days;
        System.out.println(roundOfTotalCost);
        // double --> int
        int roundUpCost = (int)cost;
        System.out.println(roundUpCost);

        // Fixed array
        int[] messagesPerDay1 = new int[5]; // messagesPerDay1 = [0,0,0,0,0]
        messagesPerDay1[0] = 5;
        messagesPerDay1[1] = 3;
        messagesPerDay1[2] = 6;
        System.out.println(messagesPerDay1[0]);
        System.out.println(messagesPerDay1[1]);
        System.out.println(messagesPerDay1[2]);

        int[] messagesPerDay2 = {3, 2, 4};
        System.out.println(messagesPerDay2[0]);
        System.out.println(messagesPerDay2[1]);
        System.out.println("lenth: " + messagesPerDay2.length);

        String[] messages = {"Please call back", "Make sure you install JDK", "Help debug please"};
        for(int i = 0; i<messages.length; i++){
            System.out.println(messages[i]);
        }
        // These loops are the same, the one below is an advanced for loop
        for(String msg: messages){
            System.out.println(msg);
        }

        System.out.println(answeringMachine.totalMessages(messagesPerDay1));
        answeringMachine.displayMessages(messages);

        // Dynamic Array - Array List
        ArrayList<String> messageList = new ArrayList<String>();
        messageList.add("Please ask me any questions");
        messageList.add("Feed the cat");
        messageList.add("Reach out for help when you have struggled form ore than twenty minutes");
        System.out.println(messageList);
        messageList.remove(1);
        System.out.println(messageList);
        System.out.println(messageList.get(0));
        System.out.println(messageList.size());

    }
}