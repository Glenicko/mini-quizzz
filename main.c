#include <stdio.h>

int main() {
    int ans, score = 0;

    printf("1. Which language styles web pages?\n1) HTML 2) CSS 3) C\n> ");
    scanf("%d", &ans);
    if (ans == 2) score++;

    printf("2. Which symbol ends a statement in C?\n1) ; 2) : 3) .\n> ");
    scanf("%d", &ans);
    if (ans == 1) score++;

    printf("3. What does HTML stand for?\n1) HyperText Markup Language 2) High Text Machine Language 3) Home Tool Markup Language\n> ");
    scanf("%d", &ans);
    if (ans == 1) score++;

    printf("Score: %d/3\n", score);
    return 0;
}