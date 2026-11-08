import java.util.Scanner;

public class test {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int score = 0;

        System.out.println("1. Which language styles web pages?\n1) HTML 2) CSS 3) C");
        if (sc.nextInt() == 2) score++;

        System.out.println("2. Which symbol ends a statement in C?\n1) ; 2) : 3) .");
        if (sc.nextInt() == 1) score++;

        System.out.println("3. What does HTML stand for?\n1) HyperText Markup Language 2) High Text Machine Language 3) Home Tool Markup Language");
        if (sc.nextInt() == 1) score++;

        System.out.println("Score: " + score + "/3");
    }
}