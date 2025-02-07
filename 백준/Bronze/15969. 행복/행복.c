#include <stdio.h>
#include <limits.h>

int main(void) {
  int num;
  int min_value = INT_MAX;
  int max_value = INT_MIN;
  int score[1001];
  int sum = 0;

  scanf("%d",&num);

  for(int i = 0;i<num;i++){
    scanf("%d",&score[i]);

    if(score[i] < min_value){
      min_value = score[i];
    }
    if(score[i] > max_value){
      max_value = score[i];
    }

  }

  sum = max_value - min_value;

  printf("%d",sum);

  return 0;
}