test_case = int(input())

for i in range(test_case):
    n, m = map(int, input().split())    

    imp = list(map(int, input().split()))
    idx = list(range(0, len(imp))) # 문서 중요도 인덱스

    order = 0
    idx[m] = 'target' # 찾고자 하는 문서 중요도 인덱스

    while True:
        if imp[0] == max(imp):
            order += 1

            if idx[0] == 'target':
                print(order)
                break
            
            else:
                imp.pop(0)
                idx.pop(0)

        else:
            imp.append(imp.pop(0))
            idx.append(idx.pop(0))