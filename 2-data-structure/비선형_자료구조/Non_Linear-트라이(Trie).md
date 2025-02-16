![트라이](/assets/images/data_structor/trie/trie.webp)

트라이(Trie) 자료구조는 **문자열 집합을 효율적으로 저장하고 탐색하기 위한 트리 형태의 자료구조**이다.

#### 트라이(Trie) 형태

- **정점(Node) :** 이전 정점의 문자와 집합에 간선을 따라 추가된 문자를 포함한 **문자열 집합**을 가진다.
- **간선(Edge) :** 이전 정점 문자열 집합에서 **새롭게 추가되어야 할 문자 정보**를 가진다.
- 즉, 문자를 추가할 때마다 간선의 값은 추가할 문자로 설정되며, 새로운 노드는 이전 노드의 문자열 집합에 간선의 값을 더한 문자열 집합을 가진다.

#### 트라이(Trie) 특징

- **검색어 자동 완성**, **사전 찾기** 등의 기능을 구현할 때 **활용되는 자료구조**이다.
- 트라이 자료구조를 사용하면 **문자열을 탐색할 때 단순한 비교보다 더 효율적으로 찾을 수 있다.**

  - 일반적으로 문자열을 탐색할 때는 $O(문자열 개수 x 각 문자열의 길이)$ 만큼의 시간 복잡도를 가진다.
  - 하지만, 트라이 자료구조를 활용하면 $O(문자열의 길이)$ 만큼의 시간 복잡도로 탐색할 수 있다.

- L이 문자열의 길이일 때, **트라이의 탐색 및 삽입 연산은 O(L) 시간 복잡도**를 가진다.
- 다만, 각 정점이 모든 자식에 대한 링크를 저장하므로, 일반적인 문자열 탐색 방법보다 **더 많은 저장 공간을 사용**한다.

<br />

## 트라이(Trie) 코드 구조

```javascript
class Node {
  constructor(value = "") {
    this.value = value;
    this.next = new Map(); // 다음 노드의 정보를 저장하기 위해 Map 객체로 만든다.
  }
}

class Trie {
  constructor() {
    this.root = new Node(); // 루트 정점을 만든다.
  }

  // 문자열 집합 추가
  insert(string) {
    let current = this.root; // 루트 정점부터 시작한다.

    for (const char of string) {
      if (!current.next.has(char)) {
        current.next.set(char, new Node(current.value + char));
      }

      current = current.next.get(char);
    }
  }

  // 문자열 집합 확인 로직
  has(string) {
    let current = this.root;

    for (const char of string) {
      if (!current.next.has(char)) {
        return false;
      }

      current = current.next.get(char);
    }

    return true;
  }
}
```

1. 루트 노드는 비어있게 설정한다.
2. 각 간선은 추가될 문자를 키로 가진다.
3. 각 정점은 이전 정점의 값 + 간선의 키를 값으로 가진다.
4. 해시 테이블과 연결 리스트를 이용하여 구현할 수 있다. (키: 간선, 값: 문자열 집합)

<br />

### 트라이(Trie) 동작원리

![트라이 동작원리](/assets/images/data_structor/trie/trie_works.webp)

> 예시: 트라이 자료구조에 `["can", "can"]` 문자열 값을 추가할 경우

1. `"cat"` 문자열 값을 트라이 자료구조에 추가

   - 문자 `"c"`를 루트 정점의 자식으로 추가한다.
   - 문자 `"a"`를 `c` 정점의 자식으로 추가한다.
   - 문자 `"t"`를 `ca` 정점의 자식으로 추가한다.

2. `"can"` 문자열 값을 트라이 자료구조에 추가
   - 문자 `"c"`는 이미 정점으로 있기 때문에 다음 문자 정점으로 이동한다.
   - 문자 `"a"`는 이미 정점으로 있기 때문에 다음 문자 정점으로 이동한다.
   - 문자 `"n"`를 `ca` 정점의 자식 정점으로 추가한다.
