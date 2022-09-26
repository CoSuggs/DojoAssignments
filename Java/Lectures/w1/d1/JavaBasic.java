// class name MUST BE the same as file name
class JavaBasic{
    public static void main(String[] args){
        System.out.println("Hello Java");

        // variables (int,double,boolean,char, String)
        String projectTitle = "Cafe Java"; // String must be ""
        String language = "Java";
        int totalFiles = 1;
        boolean isDone = false;
        double requiredTime = 0.5;
        char difficulty = 'B'; // char must be ''

        // Primitive type: int, double, boolean, char
        // Object type: String, Integer, Double, Boolean
        // Wrapper class: Integer, Double, Boolean
        
        System.out.println("Title : "+ projectTitle);
        System.out.println("Language : "+ language);
        System.out.println("Total Files : "+ totalFiles);
        System.out.println("Is it Done : "+ isDone);
        System.out.println("Required Time : "+ requiredTime);
        System.out.println("Difficulty : "+ difficulty);
        System.out.println("Max Integer : "+ Integer.MAX_VALUE);

        // conditionals and ternary
        if(isDone){
            System.out.println("This project is completed");
        }else{
            System.out.println("This project is not completed");
        }

        if(totalFiles > 0){
            System.out.println("Total file is good");
        }

        if(requiredTime < 1){
            System.out.println("This assignment shouldn't take too long");
        }else{
            System.out.println("It may take time to complete this assignment");
        }

        System.out.println(requiredTime<1? "This assignment shouldn't take too long":"It may take time to complete this assignment");

        // String (indexOf, .format, .trim(), .equals)
        System.out.println("Project title length: "+ projectTitle.length());
        String projectDetails = projectTitle.concat(" ---- ").concat(language);
        System.out.println("Project Details: "+ projectDetails);

        String projectDetails2 = String.format("Project Title: %s | Estimated Time: %.2f hours", projectTitle, requiredTime);
        System.out.println("Project Details: "+ projectDetails2);

        String creator1 = "Heidi";
        String creator2 = "Heidi";
        String creator3 = new String("Heidi");
        System.out.println(creator1 == creator2);
        System.out.println(creator1.equals(creator2));
        System.out.println(creator1 == creator3);
        System.out.println(creator1.equals(creator3));
        
        
    }
}