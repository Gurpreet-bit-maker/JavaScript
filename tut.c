#include <stdio.h>
#define RAW 3
#define COULM 3
int main()
{
    for (int i = 1; i < 5; i++)
    {
        // printf("first row : 2 ");
        for (int j = 1; j < 5; j++)
        {
            if (j < i)
            {
            printf("*");
               
            }else
            {
            printf("*");
            }
            
        }
        printf("\n");
    }

    return 0;
}
