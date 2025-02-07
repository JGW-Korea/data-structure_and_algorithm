#include <stdio.h>
#include <stdlib.h>


int main(void) {
    int n;
    scanf("%d",&n);
    int a,b;

    for(int i=1;i<=n;i++){
        scanf("%d %d",&a,&b);
        if(a > 0 && b < 10){
            printf("Case #%d: %d\n",i,a+b);
        }
    }

    
    

return 0;
}