![정렬](/assets/images/algorithm/sort/sort.webp)

정렬(Sorting)이란 **원소들을 일정한 순서에 따라 배열하는 알고리즘**이다.

<br />

#### 정렬(Sorting) 특징

- **정렬 기준은 사용자가 지정**할 수 있으며, **특정 값을 기준**으로 **오름차순** 또는 **내림차순** 정렬을 선택할 수 있다.
- 정렬 알고리즘은 크게 **비교식 정렬(Comparative Sort)**과 **분산식 정렬(Distribute Sort)**로 나눌 수 있다.
- 대부분의 프로그래밍 언어에서 **빌트인 객체로 제공**해준다.
- 정렬 알고리즘은 삽입 정렬, 선택 정렬, 버블 정렬, 합병 정렬, 퀵 정렬을 비롯해 기수 정렬, 팀 정렬, 슬립 정렬, 스파게티 정렬 등 **다양한 방식이 존재**한다.

<br />

## 정렬(Sorting) 알고리즘 종류

#### 1. 비교식 정렬(Comparative Sort)

| 비교식 정렬(Comparative Sort) 종류                                | 설명 |
| ----------------------------------------------------------------- | ---- |
| [버블 정렬(Bubble Sort)](./comparative_sort/bubble_sort.md)       |      |
| [선택 정렬(Selection Sort)](./comparative_sort/selection_sort.md) |      |
| [삽입 정렬(Insertion Sort)](./comparative_sort/insertion_sort.md) |      |

- 비교식 정렬(Comparative Sort)은 **두 원소를 기준에 따라 비교하고 교환하는 방식**으로 정렬을 수행하는 알고리즘이다.
- 비교식 정렬은 두 원소를 비교하기 위해 이중 반복문을 사용하기 때문에 $O(N^{2})$ 시간 복잡도를 가진다.

#### 2. 분산식 정렬(Distribute Sort)

| 분산식 정렬(Distribute Sort) 종류                        | 설명 |
| -------------------------------------------------------- | ---- |
| [합병 정렬(Merge Sort)](./distribute_sort/marge_sort.md) |      |
| [퀵 정렬(Quick Sort)](./distribute_sort/quick_sort.md)   |      |

- 분산식 정렬(Distribute Sort)은 **특정 피벗(Pivot) 값을 기준으로, 데이터를 여러 부분 집합으로 분할한 후, 각 부분 집합을 정렬하여 전체 데이터를 정렬**하는 알고리즘이다.

<br />

## 정렬 알고리즘 참고사항

[![정렬](/assets/images/algorithm/sort/sort_time.webp)](https://www.toptal.com/developers/sorting-algorithms)

- 많은 개발자들은 합병 정렬과 퀵 정렬과 같은 **분할 정복 방식의 정렬 알고리즘이 가장 빠르다고 오해**한다.
- 그러나 정렬 알고리즘마다 **유리한 상황**과 **불리한 상황**이 **존재**하며, **원소들의 초기 배열 상태에 따라 정렬 속도가 일정하지 않다.**
- 특히, 퀵 정렬은 원소들이 이미 어느 정도 정렬된 상태일 경우 최악의 경우 $O(N^{2})$의 시간 복잡도를 가지는 불안정한 정렬 알고리즘이다.
