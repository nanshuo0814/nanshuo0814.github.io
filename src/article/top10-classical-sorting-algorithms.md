---
title: 十大经典排序算法
date: 2024-05-23 12:15:05
cover: https://ypycdn.nanshuo.icu/posts/suanfa/%E5%8D%81%E5%A4%A7%E7%BB%8F%E5%85%B8%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95.png
excerpt: 本文介绍了十大经典排序算法，包括冒泡排序、选择排序、插入排序、希尔排序、归并排序、快速排序、堆排序、计数排序、桶排序和基数排序。详细解释了每种排序算法的基本思想、案例理解和代码实现，并提供了相应的 Java、C、C++和 Python 代码示例。
#permalink: /archives/i0I7AmUJ
isOriginal: true
category:
 - 算法
tag: 
 - 排序算法
---

![](https://ypycdn.nanshuo.icu/posts/suanfa/%E5%8D%81%E5%A4%A7%E7%BB%8F%E5%85%B8%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95.png)

以下是使用 Java 实现这十大经典排序算法的示例代码：

```java
import java.util.Arrays;

public class SortingAlgorithms {

    // 冒泡排序
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    // 选择排序
    public static void selectionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int min_idx = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[min_idx]) {
                    min_idx = j;
                }
            }
            if (min_idx!= i) {
                int temp = arr[i];
                arr[i] = arr[min_idx];
                arr[min_idx] = temp;
            }
        }
    }

    // 插入排序
    public static void insertionSort(int[] arr) {
        int n = arr.length;
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;

            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }

    // 希尔排序
    public static void shellSort(int[] arr) {
        int n = arr.length;

        // 计算初始增量
        int t = 1;
        while (t < n) {
            t = 2 * t + 1;
        }

        for (int gap = t; gap > 0; gap = (gap - 1) / 2) {
            for (int i = gap; i < n; i++) {
                int temp = arr[i];
                int j;

                // 插入排序
                for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                    arr[j] = arr[j - gap];
                }

                arr[j] = temp;
            }
        }
    }

    // 归并排序
    public static void mergeSort(int[] arr, int l, int r) {
        if (l < r) {
            int m = l + (r - l) / 2;

            mergeSort(arr, l, m);
            mergeSort(arr, m + 1, r);

            merge(arr, l, m, r);
        }
    }

    public static void merge(int[] arr, int l, int m, int r) {
        int n1 = m - l + 1;
        int n2 = r - m;

        int[] L = new int[n1];
        int[] R = new int[n2];

        for (int i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (int j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];

        int i = 0, j = 0, k = l;

        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k++] = L[i++];
            } else {
                arr[k++] = R[j++];
            }
        }

        while (i < n1) {
            arr[k++] = L[i++];
        }

        while (j < n2) {
            arr[k++] = R[j++];
        }
    }

    // 快速排序
    public static void quickSort(int[] arr, int l, int r) {
        if (l < r) {
            int p = partition(arr, l, r);
            quickSort(arr, l, p - 1);
            quickSort(arr, p + 1, r);
        }
    }

    public static int partition(int[] arr, int l, int r) {
        int pivot = arr[r];
        int i = l - 1;

        for (int j = l; j <= r - 1; j++) {
            if (arr[j] <= pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        int temp = arr[i + 1];
        arr[i + 1] = arr[r];
        arr[r] = temp;

        return i + 1;
    }

    // 堆排序
    public static void heapSort(int[] arr) {
        int n = arr.length;

        // 构建最大堆
        for (int i = n / 2 - 1; i >= 0; i--)
            heapify(arr, n, i);

        // 依次取出堆顶元素并进行排序
        for (int i = n - 1; i >= 0; i--) {
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;

            heapify(arr, i, 0);
        }
    }

    public static void heapify(int[] arr, int n, int i) {
        int largest = i;
        int l = 2 * i + 1;
        int r = 2 * i + 2;

        if (l < n && arr[l] > arr[largest])
            largest = l;

        if (r < n && arr[r] > arr[largest])
            largest = r;

        if (largest!= i) {
            int temp = arr[i];
            arr[i] = arr[largest];
            arr[largest] = temp;

            heapify(arr, n, largest);
        }
    }

    // 计数排序
    public static void countingSort(int[] arr) {
        int max = Arrays.stream(arr).max().getAsInt();
        int min = Arrays.stream(arr).min().getAsInt();
        int range = max - min + 1;

        int[] count = new int[range];
        int[] output = new int[arr.length];

        for (int num : arr) {
            count[num - min]++;
        }

        for (int i = 1; i < range; i++) {
            count[i] += count[i - 1];
        }

        for (int i = arr.length - 1; i >= 0; i--) {
            output[count[arr[i] - min] - 1] = arr[i];
            count[arr[i] - min]--;
        }

        for (int i = 0; i < arr.length; i++) {
            arr[i] = output[i];
        }
    }

    // 桶排序
    public static void bucketSort(int[] arr) {
        int min = Arrays.stream(arr).min().getAsInt();
        int max = Arrays.stream(arr).max().getAsInt();
        int bucketCount = max - min + 1;

        // 创建桶
        int[][] buckets = new int[bucketCount][arr.length];
        int[] bucketSizes = new int[bucketCount];

        // 将元素分配到桶中
        for (int num : arr) {
            int bucketIndex = num - min;
            buckets[bucketIndex][bucketSizes[bucketIndex]++] = num;
        }

        // 对每个桶中的元素进行排序
        for (int i = 0; i < bucketCount; i++) {
            Arrays.sort(buckets[i], 0, bucketSizes[i]);
        }

        // 合并桶中的元素
        int index = 0;
        for (int i = 0; i < bucketCount; i++) {
            for (int j = 0; j < bucketSizes[i]; j++) {
                arr[index++] = buckets[i][j];
            }
        }
    }

    // 基数排序
    public static void radixSort(int[] arr) {
        int max = Arrays.stream(arr).max().getAsInt();
        int exp = 1;

        while (max / exp > 0) {
            countSort(arr, exp);
            exp *= 10;
        }
    }

    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6};

        // 冒泡排序
        bubbleSort(arr);
        System.out.println("冒泡排序结果: " + Arrays.toString(arr));

        // 选择排序
        selectionSort(arr);
        System.out.println("选择排序结果: " + Arrays.toString(arr));

        // 插入排序
        insertionSort(arr);
        System.out.println("插入排序结果: " + Arrays.toString(arr));

        // 希尔排序
        shellSort(arr);
        System.out.println("希尔排序结果: " + Arrays.toString(arr));

        // 归并排序
        mergeSort(arr, 0, arr.length - 1);
        System.out.println("归并排序结果: " + Arrays.toString(arr));

        // 快速排序
        quickSort(arr, 0, arr.length - 1);
        System.out.println("快速排序结果: " + Arrays.toString(arr));

        // 堆排序
        heapSort(arr);
        System.out.println("堆排序结果: " + Arrays.toString(arr));

        // 计数排序
        countingSort(arr);
        System.out.println("计数排序结果: " + Arrays.toString(arr));

        // 桶排序
        bucketSort(arr);
        System.out.println("桶排序结果: " + Arrays.toString(arr));

        // 基数排序
        radixSort(arr);
        System.out.println("基数排序结果: " + Arrays.toString(arr));
    }
}
```

# 冒泡排序

## 基本思想

**冒泡排序（Bubble Sort），**通过**反复比较相邻元素**，如果顺序不对则进行**交换**，并将**较大**的元素**逐步**“推”到数组**末尾**。

## 案例理解

用数字序列[5, 3, 8, 6, 2]来举例说明冒泡排序的过程

第一轮：

- 毕竟 5 和 3，3 小，交换位置得到[3, 5, 8, 6, 2]。
- 毕竟 5 和 8，5 小，位置不变，还是[3, 5, 8, 6, 2]。
- 毕竟 8 和 6，6 小，交换位置得到[3, 5, 6, 8, 2]。
- 毕竟 8 和 2，2 小，交换位置得到[3, 5, 6, 2, 8]。第一轮结束，最大的 8 被“冒泡”到了末尾。

第二轮：

- 毕竟 3 和 5，3 小，位置不变，是[3, 5, 6, 2, 8]。
- 毕竟 5 和 6，5 小，位置不变，还是[3, 5, 6, 2, 8]。
- 毕竟 6 和 2，2 小，交换位置得到[3, 5, 2, 6, 8]。第二轮结束，第二大的 6 被确定位置。

第三轮：

- 毕竟 3 和 5，3 小，位置不变，是[3, 5, 2, 6, 8]。
- 毕竟 5 和 2，2 小，交换位置得到[3, 2, 5, 6, 8]。

第四轮：

- 毕竟 3 和 2，2 小，交换位置得到最终排序结果[2, 3, 5, 6, 8]。

经过这样一轮一轮的比较和交换，较小的数字就像气泡一样逐步“浮”到前面，最终实现整个序列的排序。

## 更多资料

有动图演示排序过程
[1.1 冒泡排序 | 菜鸟教程](https://www.runoob.com/w3cnote/bubble-sort.html)

## 代码实现

**Java 代码实现：**

```java
public class BubbleSort {

    public static void bubbleSort(int[] arr) {
        int n = arr.length;

        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        bubbleSort(arr);
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
```

**C代码实现：**

```c
#include <stdio.h>

void bubbleSort(int arr[], int n) {
    int i, j, temp;
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);

    bubbleSort(arr, n);

    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}
```

**C++代码实现：**

```cpp
#include <iostream>

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]);
            }
        }
    }
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);

    bubbleSort(arr, n);

    for (int i = 0; i < n; i++) {
        std::cout << arr[i] << " ";
    }

    return 0;
}
```

**Python代码实现：**

```python
def bubble_sort(arr):
    n = len(arr)

    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

# 测试示例
arr = [64, 34, 25, 12, 22, 11, 90]
bubble_sort(arr)
print(arr)
```

# 插入排序

## 基本思想

**插入排序（Insertion Sort），**将**未排序**的元素逐个**插入到已排序**部分的**适当位置**，从而逐步扩大已排序部分，直到整个数组都被排序。

## 案例理解

假设现在有一群人按身高排队，一开始这些人是随意站的。 第一个人就直接站在队伍开头，这就相当于已排序部分。 然后第二个人来了，他会和前面那个人比较身高，如果他矮，他就站在前面那个人前面，这就是把第二个人插入到已排序部分的合适位置。 接着第三个人来了，他先和第二个比，可能比第二个人高，那就再和第一个比，然后找到自己合适的位置插入进去。 以此类推，每来一个新的人，都在已排序的队伍中找到自己应该站的位置插入进去，直到所有人都排好队。
比如初始队伍是[180cm, 170cm, 160cm, 190cm, 150cm]，那么插入排序的过程是这样的：
第一轮：[180cm]
第二轮：[170cm, 180cm]
第三轮：[160cm, 170cm, 180cm]
第四轮：[160cm, 170cm, 180cm, 190cm]
第五轮：[150cm, 160cm, 170cm, 180cm, 190cm]

## 更多资料

有动图演示排序过程
[1.3 插入排序 | 菜鸟教程](https://www.runoob.com/w3cnote/insertion-sort.html)

## 代码实现

**Java 代码实现**：

```java
public class InsertionSort {
    public static void insertionSort(int[] arr) {
        int n = arr.length;
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;

            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }

    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6};
        insertionSort(arr);
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
```

**C 代码实现**：

```c
#include <stdio.h>

void insertionSort(int arr[], int n) {
    int i, key, j;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

int main() {
    int arr[] = {12, 11, 13, 5, 6};
    int n = sizeof(arr) / sizeof(arr[0]);

    insertionSort(arr, n);

    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}
```

**C++代码实现**：

```cpp
#include <iostream>

void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

int main() {
    int arr[] = {12, 11, 13, 5, 6};
    int n = sizeof(arr) / sizeof(arr[0]);

    insertionSort(arr, n);

    for (int i = 0; i < n; i++) {
        std::cout << arr[i] << " ";
    }

    return 0;
}
```

**Python 代码实现**：

```python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1

        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key

# 测试示例
arr = [12, 11, 13, 5, 6]
insertion_sort(arr)
print(arr)
```

# 选择排序

## 基本思想

**选择排序（Selection Sort），**首先在**未排序**序列中**找到最小（大）元素**，**存放到**排序序列的**起始位置**，然后再从剩余**未排序**元素中继续**寻找最小（大）元素**，然后放到**已排序**序列的**末尾**。以此类推，直到所有元素均排序完毕。

## 案例理解

比如对数组[9, 5, 7, 3, 1]进行选择排序
第一轮会找到最小的 1 并与 9 交换位置得到[1, 5, 7, 3, 9]
第二轮找到次小的 3 与 5 交换得到[1, 3, 7, 5, 9]
第三轮找到 5 与 7 交换，最终得到有序数组[1, 3, 5, 7, 9]

## 更多资料

有动图演示排序过程
[1.2 选择排序 | 菜鸟教程](https://www.runoob.com/w3cnote/selection-sort.html)

## 代码实现

**Java代码实现：**

```java
public class SelectionSort {
    public static void selectionSort(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            int min_idx = i;
            for (int j = i + 1; j < arr.length; j++)
                if (arr[j] < arr[min_idx])
                    min_idx = j;

            int temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
        }
    }

    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6};
        selectionSort(arr);
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
```

**C代码实现：**

```java
#include <stdio.h>

void selectionSort(int arr[], int n) {
    int i, j, min_idx;

    for (i = 0; i < n - 1; i++) {
        min_idx = i;
        for (j = i + 1; j < n; j++)
            if (arr[j] < arr[min_idx])
                min_idx = j;

        int temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}

int main() {
    int arr[] = {12, 11, 13, 5, 6};
    int n = sizeof(arr) / sizeof(arr[0]);

    selectionSort(arr, n);

    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);

    return 0;
}
```

**C++代码实现：**

```cpp
#include <iostream>

void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int min_idx = i;
        for (int j = i + 1; j < n; j++)
            if (arr[j] < arr[min_idx])
                min_idx = j;

        std::swap(arr[min_idx], arr[i]);
    }
}

int main() {
    int arr[] = {12, 11, 13, 5, 6};
    int n = sizeof(arr) / sizeof(arr[0]);

    selectionSort(arr, n);

    for (int num : arr) {
        std::cout << num << " ";
    }

    return 0;
}
```

**Python代码实现：**

```python
def selection_sort(arr):
    for i in range(len(arr) - 1):
        min_idx = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]

arr = [12, 11, 13, 5, 6]
selection_sort(arr)
print(arr)
```

# 快速排序

## 基本思想

**快速排序（Quick Sort），**是对冒泡排序的一种改进。它**通过一趟排序**将待排记录**分割**成独立的**两部分**，其中一部分记录的关键字**均**比另一部分的关键字**小**，然后**分别**对这两部分记录**继续进行排序**，以达到整个序列有序。

## 案例理解

比如对数组[8, 4, 2, 7, 1]进行快速排序，选择第一个元素 8 作为基准，经过一次划分后，小于 8 的元素在左边，大于 8 的元素在右边，得到[4, 2, 1] 8 [7]，然后再对左右两部分分别进行排序，最终得到有序数组[1, 2, 4, 7, 8]。

## 更多资料

有动图演示排序过程
[1.6 快速排序 | 菜鸟教程](https://www.runoob.com/w3cnote/quick-sort-2.html)

## 代码实现

**Java代码实现：**

```java
public class QuickSort {

    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pivotIndex = partition(arr, low, high);
            quickSort(arr, low, pivotIndex - 1);
            quickSort(arr, pivotIndex + 1, high);
        }
    }

    public static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = (low - 1);

        for (int j = low; j <= high - 1; j++) {
            if (arr[j] <= pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;

        return i + 1;
    }

    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6};
        quickSort(arr, 0, arr.length - 1);
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
```

**C代码实现：**

```c
#include <stdio.h>

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);

    for (int j = low; j <= high - 1; j++) {
        if (arr[j] <= pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    return i + 1;
}

int main() {
    int arr[] = {12, 11, 13, 5, 6};
    quickSort(arr, 0, sizeof(arr) / sizeof(arr[0]) - 1);

    for (int i = 0; i < sizeof(arr) / sizeof(arr[0]); i++)
        printf("%d ", arr[i]);

    return 0;
}
```

**C++代码实现：**

```cpp
#include <iostream>

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);

    for (int j = low; j <= high - 1; j++) {
        if (arr[j] <= pivot) {
            i++;
            std::swap(arr[i], arr[j]);
        }
    }

    std::swap(arr[i + 1], arr[high]);

    return i + 1;
}

int main() {
    int arr[] = {12, 11, 13, 5, 6};
    quickSort(arr, 0, sizeof(arr) / sizeof(arr[0]) - 1);

    for (int num : arr) {
        std::cout << num << " ";
    }

    return 0;
}
```

**Python代码实现：**

```python
def quick_sort(arr, low, high):
    if low < high:
        pivot_index = partition(arr, low, high)
        quick_sort(arr, low, pivot_index - 1)
        quick_sort(arr, pivot_index + 1, high)

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1

    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]

    arr[i + 1], arr[high] = arr[high], arr[i + 1]

    return i + 1

arr = [12, 11, 13, 5, 6]
quick_sort(arr, 0, len(arr) - 1)
print(arr)
```

# 归并排序

## 基本思想

**归并排序（Merge Sort），**是建立在归并操作上的一种有效、稳定的排序算法，该算法是采用分治法(Divide and Conquer）的一个非常典型的应用。
将**一个序列分成两个子序列**，对这两个子序列**分别进行排序**，然后将排好序的子序列**合并**成一个最终的有序序列。

## 案例理解

比如对数组[8, 4, 2, 7, 1]进行归并排序，首先将数组分成两个子数组[8, 4]和[2, 7, 1]，然后对这两个子数组分别进行排序，得到[4, 8]和[1, 2, 7]，最后将这两个排好序的子数组合并成一个最终的有序数组[1, 2, 4, 7, 8]。

## 更多资料

[1.5 归并排序 | 菜鸟教程](https://www.runoob.com/w3cnote/merge-sort.html)

## 代码实现

**Java 代码实现**：

```java
public class MergeSort {
    public static void mergeSort(int[] arr, int l, int r) {
        if (l < r) {
            int m = l + (r - l) / 2;

            mergeSort(arr, l, m);
            mergeSort(arr, m + 1, r);

            merge(arr, l, m, r);
        }
    }

    public static void merge(int[] arr, int l, int m, int r) {
        int n1 = m - l + 1;
        int n2 = r - m;

        int[] L = new int[n1];
        int[] R = new int[n2];

        for (int i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (int j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];

        int i = 0, j = 0, k = l;

        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k++] = L[i++];
            } else {
                arr[k++] = R[j++];
            }
        }

        while (i < n1) {
            arr[k++] = L[i++];
        }

        while (j < n2) {
            arr[k++] = R[j++];
        }
    }

    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6};
        int n = arr.length;

        mergeSort(arr, 0, n - 1);

        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
```

**C 代码实现**：

```c
#include <stdio.h>

void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;

    int L[n1], R[n2];

    for (int i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    int i = 0, j = 0, k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k++] = L[i++];
        } else {
            arr[k++] = R[j++];
        }
    }

    while (i < n1) {
        arr[k++] = L[i++];
    }

    while (j < n2) {
        arr[k++] = R[j++];
    }
}

void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;

        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);

        merge(arr, l, m, r);
    }
}

int main() {
    int arr[] = {12, 11, 13, 5, 6};
    int n = sizeof(arr) / sizeof(arr[0]);

    mergeSort(arr, 0, n - 1);

    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);

    return 0;
}
```

**C++代码实现**：

```cpp
#include <iostream>

void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;

    int L[n1], R[n2];

    for (int i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    int i = 0, j = 0, k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k++] = L[i++];
        } else {
            arr[k++] = R[j++];
        }
    }

    while (i < n1) {
        arr[k++] = L[i++];
    }

    while (j < n2) {
        arr[k++] = R[j++];
    }
}

void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;

        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);

        merge(arr, l, m, r);
    }
}

int main() {
    int arr[] = {12, 11, 13, 5, 6};
    int n = sizeof(arr) / sizeof(arr[0]);

    mergeSort(arr, 0, n - 1);

    for (int num : arr) {
        std::cout << num << " ";
    }

    return 0;
}
```

**Python 代码实现**：

```python
def merge(arr, l, m, r):
    n1 = m - l + 1
    n2 = r - m

    L = [0] * n1
    R = [0] * n2

    for i in range(0, n1):
        L[i] = arr[l + i]

    for j in range(0, n2):
        R[j] = arr[m + 1 + j]

    i = 0
    j = 0
    k = l

    while i < n1 and j < n2:
        if L[i] <= R[j]:
            arr[k] = L[i]
            i += 1
        else:
            arr[k] = R[j]
            j += 1
        k += 1

    while i < n1:
        arr[k] = L[i]
        i += 1
        k += 1

    while j < n2:
        arr[k] = R[j]
        j += 1
        k += 1

def mergeSort(arr, l, r):
    if l < r:
        m = l + (r - l) // 2

        mergeSort(arr, l, m)
        mergeSort(arr, m + 1, r)

        merge(arr, l, m, r)

# 测试示例
arr = [12, 11, 13, 5, 6]
n = len(arr)

mergeSort(arr, 0, n - 1)

for i in range(n):
    print(arr[i], end=" ")
```

# 堆排序

## 基本思想

**堆排序（Heap Sort），**是一种基于二叉堆数据结构的排序算法。它的基本思想是将数组构建成一个**最大堆**，然后依次**取出堆顶元素**并将剩余元素重新调整为最大堆，直到整个数组排序完毕。

## 案例理解

假设有一个数组[16, 14, 10, 8, 7, 9, 3, 2, 4, 1]，使用堆排序对其进行排序。

1. 构建最大堆：将数组构建成一个最大堆，堆顶元素为最大值。
2. 依次取出堆顶元素并进行排序：将堆顶元素与数组末尾元素交换，然后重新调整堆，使剩余元素仍然满足最大堆的性质。重复这个过程，直到整个数组排序完毕。

经过堆排序后，数组将变为[1, 2, 3, 4, 7, 8, 9, 10, 14, 16]，实现了从大到小的排序。

## 更多资料

[1.7 堆排序 | 菜鸟教程](https://www.runoob.com/w3cnote/heap-sort.html)

## 代码实现

**Java 代码实现**：

```java
import java.util.Arrays;

public class HeapSort {
    public static void heapSort(int[] arr) {
        int n = arr.length;

        // 构建最大堆
        for (int i = n / 2 - 1; i >= 0; i--)
            heapify(arr, n, i);

        // 依次取出堆顶元素并进行排序
        for (int i = n - 1; i >= 0; i--) {
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;

            heapify(arr, i, 0);
        }
    }

    // 维护最大堆的性质
    public static void heapify(int[] arr, int n, int i) {
        int largest = i;
        int l = 2 * i + 1;
        int r = 2 * i + 2;

        if (l < n && arr[l] > arr[largest])
            largest = l;

        if (r < n && arr[r] > arr[largest])
            largest = r;

        if (largest!= i) {
            int temp = arr[i];
            arr[i] = arr[largest];
            arr[largest] = temp;

            heapify(arr, n, largest);
        }
    }

    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6};
        heapSort(arr);
        System.out.println(Arrays.toString(arr));
    }
}
```

**C 代码实现**：

```c
#include <stdio.h>

// 交换函数
void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// 维护最大堆的性质
void heapify(int arr[], int n, int i) {
    int largest = i;
    int l = 2 * i + 1;
    int r = 2 * i + 2;

    if (l < n && arr[l] > arr[largest])
        largest = l;

    if (r < n && arr[r] > arr[largest])
        largest = r;

    if (largest!= i) {
        swap(&arr[i], &arr[largest]);
        heapify(arr, n, largest);
    }
}

// 堆排序函数
void heapSort(int arr[], int n) {
    // 构建最大堆
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);

    // 依次取出堆顶元素并进行排序
    for (int i = n - 1; i >= 0; i--) {
        swap(&arr[0], &arr[i]);
        heapify(arr, i, 0);
    }
}

// 打印数组函数
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++)
        printf("%d ", arr[i]);
    printf("\n");
}

int main() {
    int arr[] = {12, 11, 13, 5, 6};
    int n = sizeof(arr) / sizeof(arr[0]);

    printf("排序前的数组为: ");
    printArray(arr, n);

    heapSort(arr, n);

    printf("排序后的数组为: ");
    printArray(arr, n);

    return 0;
}
```

**C++代码实现**：

```cpp
#include <iostream>
using namespace std;

// 交换函数
void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// 维护最大堆的性质
void heapify(int arr[], int n, int i) {
    int largest = i;
    int l = 2 * i + 1;
    int r = 2 * i + 2;

    if (l < n && arr[l] > arr[largest])
        largest = l;

    if (r < n && arr[r] > arr[largest])
        largest = r;

    if (largest!= i) {
        swap(arr[i], arr[largest]);
        heapify(arr, n, largest);
    }
}

// 堆排序函数
void heapSort(int arr[], int n) {
    // 构建最大堆
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);

    // 依次取出堆顶元素并进行排序
    for (int i = n - 1; i >= 0; i--) {
        swap(arr[0], arr[i]);
        heapify(arr, i, 0);
    }
}

// 打印数组函数
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++)
        cout << arr[i] << " ";
    cout << endl;
}

int main() {
    int arr[] = {12, 11, 13, 5, 6};
    int n = sizeof(arr) / sizeof(arr[0]);

    cout << "排序前的数组为: ";
    printArray(arr, n);

    heapSort(arr, n);

    cout << "排序后的数组为: ";
    printArray(arr, n);

    return 0;
}
```

**Python 代码实现**：

```python
def heapify(arr, n, i):
    largest = i
    l = 2 * i + 1
    r = 2 * i + 2

    if l < n and arr[l] > arr[largest]:
        largest = l

    if r < n and arr[r] > arr[largest]:
        largest = r

    if largest!= i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heapSort(arr):
    n = len(arr)

    # 构建最大堆
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)

    # 依次取出堆顶元素并进行排序
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        heapify(arr, i, 0)

# 测试示例
arr = [12, 11, 13, 5, 6]
heapSort(arr)
print("排序后的数组:", arr)
```

# 希尔排序

## 基本思想

**希尔排序（Shell Sort），**是直接插入排序算法的一种更高效的改进版本。希尔排序通过**将数组分成较小的子数组来进行排序**，每个子数组都**使用直接插入排序**进行排序，最终使得整个数组有序。

## 案例理解

假设有一个数组[9, 1, 20, 3, 6, 7]，使用希尔排序对其进行排序。

1. 选择合适的增量序列，例如[3, 1]。
2. 以增量 3 将数组分成子数组：[9, 20]、[1, 3]、[6, 7]。
3. 对每个子数组进行直接插入排序。
4. 重复步骤 2 和 3，直到增量为 1，即对整个数组进行直接插入排序。

经过希尔排序后，数组将变为[1, 3, 6, 7, 9, 20]，实现了排序。

## 更多资料

[1.4 希尔排序 | 菜鸟教程](https://www.runoob.com/w3cnote/shell-sort.html)

## 代码实现

**Java 代码实现**：

```java
public class ShellSort {
    public static void shellSort(int[] arr) {
        int n = arr.length;

        // 计算初始增量
        int t = 1;
        while (t < n) {
            t = 2 * t + 1;
        }

        for (int gap = t; gap > 0; gap = (gap - 1) / 2) {
            for (int i = gap; i < n; i++) {
                int temp = arr[i];
                int j;

                // 插入排序
                for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                    arr[j] = arr[j - gap];
                }

                arr[j] = temp;
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {9, 1, 20, 3, 6, 7};
        shellSort(arr);
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
```

**C 代码实现**：

```c
#include <stdio.h>

void shellSort(int arr[], int n) {
    int t = 1;
    while (t < n) {
        t = 2 * t + 1;
    }

    for (int gap = t; gap > 0; gap = (gap - 1) / 2) {
        for (int i = gap; i < n; i++) {
            int temp = arr[i];
            int j;

            // 插入排序
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }

            arr[j] = temp;
        }
    }
}

int main() {
    int arr[] = {9, 1, 20, 3, 6, 7};
    int n = sizeof(arr) / sizeof(arr[0]);

    shellSort(arr, n);

    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}
```

**C++代码实现**：

```cpp
#include <iostream>

void shellSort(int arr[], int n) {
    int t = 1;
    while (t < n) {
        t = 2 * t + 1;
    }

    for (int gap = t; gap > 0; gap = (gap - 1) / 2) {
        for (int i = gap; i < n; i++) {
            int temp = arr[i];
            int j;

            // 插入排序
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }

            arr[j] = temp;
        }
    }
}

int main() {
    int arr[] = {9, 1, 20, 3, 6, 7};
    int n = sizeof(arr) / sizeof(arr[0]);

    shellSort(arr, n);

    for (int i = 0; i < n; i++) {
        std::cout << arr[i] << " ";
    }

    return 0;
}
```

**Python 代码实现**：

```python
def shell_sort(arr):
    n = len(arr)

    # 计算初始增量
    t = 1
    while t < n:
        t = 2 * t + 1

    for gap in range(t, 0, -1):
        for i in range(gap, n):
            temp = arr[i]
            j = i

            # 插入排序
            while j >= gap and arr[j - gap] > temp:
                arr[j] = arr[j - gap]
                j -= gap

            arr[j] = temp

# 测试示例
arr = [9, 1, 20, 3, 6, 7]
shell_sort(arr)
print("排序后的数组:", arr)
```

# 计数排序

## 基本思想

**计数排序（Counting Sort），**是一种非比较排序算法，它通过**统计**数组中**每个元素出现的次数**，然后根据元素的**出现次数来确定**它们在有序数组中的**位置**。

## 案例理解

假设有一个数组[2, 5, 3, 0, 2, 3, 0, 3]，使用计数排序对其进行排序。

1. 统计每个元素出现的次数：

- 元素 0 出现 2 次。
- 元素 2 出现 3 次。
- 元素 3 出现 4 次。
- 元素 5 出现 1 次。

2. 根据元素出现次数确定它们在有序数组中的位置：

- 元素 0 排在第 1、2 位。
- 元素 2 排在第 3、4、5 位。
- 元素 3 排在第 6、7、8、9 位。
- 元素 5 排在第 10 位。

经过计数排序后，数组将变为[0, 0, 2, 2, 2, 3, 3, 3, 3, 5]，实现了排序。

## 更多资料

[1.8 计数排序 | 菜鸟教程](https://www.runoob.com/w3cnote/counting-sort.html)

## 代码实现

**Java 代码实现**：

```java
public class CountingSort {
    public static void countingSort(int[] arr) {
        int max = Arrays.stream(arr).max().getAsInt();
        int min = Arrays.stream(arr).min().getAsInt();
        int range = max - min + 1;

        int[] count = new int[range];
        int[] output = new int[arr.length];

        for (int num : arr) {
            count[num - min]++;
        }

        for (int i = 1; i < range; i++) {
            count[i] += count[i - 1];
        }

        for (int i = arr.length - 1; i >= 0; i--) {
            output[count[arr[i] - min] - 1] = arr[i];
            count[arr[i] - min]--;
        }

        for (int i = 0; i < arr.length; i++) {
            arr[i] = output[i];
        }
    }

    public static void main(String[] args) {
        int[] arr = {2, 5, 3, 0, 2, 3, 0, 3};
        countingSort(arr);
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
```

**C 代码实现**：

```c
#include <stdio.h>

void countingSort(int arr[], int n) {
    int max = arr[0];
    int min = arr[0];

    for (int i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }

    int range = max - min + 1;

    int count[range];
    int output[n];

    for (int i = 0; i < range; i++) {
        count[i] = 0;
    }

    for (int i = 0; i < n; i++) {
        count[arr[i] - min]++;
    }

    for (int i = 1; i < range; i++) {
        count[i] += count[i - 1];
    }

    for (int i = n - 1; i >= 0; i--) {
        output[count[arr[i] - min] - 1] = arr[i];
        count[arr[i] - min]--;
    }

    for (int i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

int main() {
    int arr[] = {2, 5, 3, 0, 2, 3, 0, 3};
    int n = sizeof(arr) / sizeof(arr[0]);

    countingSort(arr, n);

    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}
```

**C++代码实现**：

```cpp
#include <iostream>
#include <algorithm>

void countingSort(int arr[], int n) {
    int max = *std::max_element(arr, arr + n);
    int min = *std::min_element(arr, arr + n);
    int range = max - min + 1;

    int count[range];
    int output[n];

    std::fill(count, count + range, 0);

    for (int i = 0; i < n; i++) {
        count[arr[i] - min]++;
    }

    for (int i = 1; i < range; i++) {
        count[i] += count[i - 1];
    }

    for (int i = n - 1; i >= 0; i--) {
        output[count[arr[i] - min] - 1] = arr[i];
        count[arr[i] - min]--;
    }

    for (int i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

int main() {
    int arr[] = {2, 5, 3, 0, 2, 3, 0, 3};
    int n = sizeof(arr) / sizeof(arr[0]);

    countingSort(arr, n);

    for (int i = 0; i < n; i++) {
        std::cout << arr[i] << " ";
    }

    return 0;
}
```

**Python 代码实现**：

```python
def countingSort(arr):
    max_val = max(arr)
    min_val = min(arr)
    range_val = max_val - min_val + 1

    count = [0] * range_val
    output = [0] * len(arr)

    for num in arr:
        count[num - min_val] += 1

    for i in range(1, range_val):
        count[i] += count[i - 1]

    for i in range(len(arr) - 1, -1, -1):
        output[count[arr[i] - min_val] - 1] = arr[i]
        count[arr[i] - min_val] -= 1

    for i in range(len(arr)):
        arr[i] = output[i]

# 测试示例
arr = [2, 5, 3, 0, 2, 3, 0, 3]
countingSort(arr)
print("排序后的数组:", arr)
```

# 桶排序

## 基本思想

**桶排序（Bucket Sort），**是一种简单的排序算法，它的基本思想是**将待排序的数据分到不同的桶中**，然后对**每个桶**中的数据进行**单独排序**，最后将**各个桶**中的数据按照顺序**合并**起来。

## 案例理解

假设有一个数组[4, 2, 1, 5, 3]，使用桶排序对其进行排序。

1. 确定桶的数量和范围：

- 可以选择桶的数量为数组中的最大值减去最小值加 1，即 5 - 1 + 1 = 5。
- 每个桶的范围为 1。

2. 将元素分配到桶中：

- 将 4 分配到底 4 个桶中。
- 将 2 分配到底 2 个桶中。
- 将 1 分配到底 1 个桶中。
- 将 5 分配到底 5 个桶中。
- 将 3 分配到底 3 个桶中。

3. 对每个桶中的元素进行排序：

- 可以使用其他排序算法对每个桶中的元素进行排序，例如插入排序。

4. 合并桶中的元素：

- 按照桶的顺序，将桶中的元素依次取出并合并到最终的有序数组中。

经过桶排序后，数组将变为[1, 2, 3, 4, 5]，实现了排序。

## 更多资料

[1.9 桶排序 | 菜鸟教程](https://www.runoob.com/w3cnote/bucket-sort.html)

## 代码实现

**Java 代码实现**：

```java
import java.util.Arrays;

public class BucketSort {
    public static void bucketSort(int[] arr) {
        int min = Arrays.stream(arr).min().getAsInt();
        int max = Arrays.stream(arr).max().getAsInt();
        int bucketCount = max - min + 1;

        // 创建桶
        int[][] buckets = new int[bucketCount][arr.length];
        int[] bucketSizes = new int[bucketCount];

        // 将元素分配到桶中
        for (int num : arr) {
            int bucketIndex = num - min;
            buckets[bucketIndex][bucketSizes[bucketIndex]++] = num;
        }

        // 对每个桶中的元素进行排序
        for (int i = 0; i < bucketCount; i++) {
            Arrays.sort(buckets[i], 0, bucketSizes[i]);
        }

        // 合并桶中的元素
        int index = 0;
        for (int i = 0; i < bucketCount; i++) {
            for (int j = 0; j < bucketSizes[i]; j++) {
                arr[index++] = buckets[i][j];
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {4, 2, 1, 5, 3};
        bucketSort(arr);
        System.out.println(Arrays.toString(arr));
    }
}
```

**C 代码实现**：

```c
#include <stdio.h>

// 交换函数
void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// 插入排序函数
void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

// 桶排序函数
void bucketSort(int arr[], int n) {
    int min = arr[0];
    int max = arr[0];

    // 找出数组中的最小值和最大值
    for (int i = 1; i < n; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i];
        }
    }

    int bucketCount = max - min + 1;

    // 创建桶
    int* buckets[bucketCount];
    int bucketSizes[bucketCount];

    // 初始化桶和桶的大小
    for (int i = 0; i < bucketCount; i++) {
        buckets[i] = (int*)malloc(sizeof(int) * n);
        bucketSizes[i] = 0;
    }

    // 将元素分配到桶中
    for (int i = 0; i < n; i++) {
        int bucketIndex = arr[i] - min;
        buckets[bucketIndex][bucketSizes[bucketIndex]++] = arr[i];
    }

    // 对每个桶中的元素进行排序
    for (int i = 0; i < bucketCount; i++) {
        insertionSort(buckets[i], bucketSizes[i]);
    }

    // 合并桶中的元素
    int index = 0;
    for (int i = 0; i < bucketCount; i++) {
        for (int j = 0; j < bucketSizes[i]; j++) {
            arr[index++] = buckets[i][j];
        }
    }

    // 释放桶的内存
    for (int i = 0; i < bucketCount; i++) {
        free(buckets[i]);
    }
}

int main() {
    int arr[] = {4, 2, 1, 5, 3};
    int n = sizeof(arr) / sizeof(arr[0]);

    printf("排序前的数组为: ");
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);

    bucketSort(arr, n);

    printf("排序后的数组为: ");
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);

    return 0;
}
```

**C++代码实现**：

```cpp
#include <iostream>
#include <algorithm>
#include <vector>

// 交换函数
void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

// 插入排序函数
void insertionSort(std::vector<int>& arr) {
    for (size_t i = 1; i < arr.size(); ++i) {
        int key = arr[i];
        size_t j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

// 桶排序函数
void bucketSort(std::vector<int>& arr) {
    int min = *std::min_element(arr.begin(), arr.end());
    int max = *std::max_element(arr.begin(), arr.end());
    int bucketCount = max - min + 1;

    // 创建桶
    std::vector<std::vector<int>> buckets(bucketCount);

    // 将元素分配到桶中
    for (int num : arr) {
        int bucketIndex = num - min;
        buckets[bucketIndex].push_back(num);
    }

    // 对每个桶中的元素进行排序
    for (auto& bucket : buckets) {
        insertionSort(bucket);
    }

    // 合并桶中的元素
    size_t index = 0;
    for (auto& bucket : buckets) {
        for (int num : bucket) {
            arr[index++] = num;
        }
    }
}

int main() {
    std::vector<int> arr = {4, 2, 1, 5, 3};

    std::cout << "排序前的数组为: ";
    for (int num : arr) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    bucketSort(arr);

    std::cout << "排序后的数组为: ";
    for (int num : arr) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}
```

**Python 代码实现**：

```python
def bucket_sort(arr):
    min_val = min(arr)
    max_val = max(arr)
    bucket_count = max_val - min_val + 1

    # 创建桶
    buckets = [[] for _ in range(bucket_count)]

    # 将元素分配到桶中
    for num in arr:
        bucket_index = num - min_val
        buckets[bucket_index].append(num)

    # 对每个桶中的元素进行排序
    for bucket in buckets:
        bucket.sort()

    # 合并桶中的元素
    sorted_arr = []
    for bucket in buckets:
        sorted_arr.extend(bucket)

    return sorted_arr

# 测试示例
arr = [4, 2, 1, 5, 3]
sorted_arr = bucket_sort(arr)
print("排序后的数组:", sorted_arr)
```

# 基数排序

## 基本思想

**基数排序（Radix Sort），**是一种非比较排序算法，它**根据数字的每一位来排序**。基数排序**适用于整数排序**，特别是**对位数固定**的情况效果较好。

## 案例理解

假设有一个数组[170, 45, 75, 90, 802, 24, 2, 66]，使用基数排序对其进行排序。

1. 对各位进行排序：

- 将数组中的元素按照个位数字进行排序。
- 得到[2, 24, 45, 66, 75, 90, 170, 802]。

2. 对十位进行排序：

- 将个位排序后的数组中的元素按照十位数字进行排序。
- 得到[2, 24, 45, 66, 75, 90, 170, 802]。

3. 对百位进行排序：

- 将十位排序后的数组中的元素按照百位数字进行排序。
- 得到[2, 24, 45, 66, 75, 90, 170, 802]。

经过基数排序后，数组将变为[2, 24, 45, 66, 75, 90, 170, 802]，实现了排序。

## 更多资料

[1.10 基数排序 | 菜鸟教程](https://www.runoob.com/w3cnote/radix-sort.html)

## 代码实现

**Java 代码实现**：

```java
import java.util.Arrays;

public class RadixSort {
    public static void radixSort(int[] arr) {
        int max = Arrays.stream(arr).max().getAsInt();
        int exp = 1;

        while (max / exp > 0) {
            countSort(arr, exp);
            exp *= 10;
        }
    }

    public static void countSort(int[] arr, int exp) {
        int n = arr.length;
        int[] output = new int[n];
        int[] count = new int[10];

        for (int i = 0; i < n; i++) {
            count[(arr[i] / exp) % 10]++;
        }

        for (int i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

        for (int i = n - 1; i >= 0; i--) {
            output[count[(arr[i] / exp) % 10] - 1] = arr[i];
            count[(arr[i] / exp) % 10]--;
        }

        for (int i = 0; i < n; i++) {
            arr[i] = output[i];
        }
    }

    public static void main(String[] args) {
        int[] arr = {170, 45, 75, 90, 802, 24, 2, 66};
        radixSort(arr);
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
```

**C 代码实现**：

```c
#include <stdio.h>

void radixSort(int arr[], int n) {
    int max = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    int exp = 1;
    while (max / exp > 0) {
        countSort(arr, n, exp);
        exp *= 10;
    }
}

void countSort(int arr[], int n, int exp) {
    int output[n];
    int count[10] = {0};

    for (int i = 0; i < n; i++) {
        count[(arr[i] / exp) % 10]++;
    }

    for (int i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    for (int i = n - 1; i >= 0; i--) {
        output[count[(arr[i] / exp) % 10] - 1] = arr[i];
        count[(arr[i] / exp) % 10]--;
    }

    for (int i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

int main() {
    int arr[] = {170, 45, 75, 90, 802, 24, 2, 66};
    int n = sizeof(arr) / sizeof(arr[0]);

    radixSort(arr, n);

    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}
```

**C++代码实现**：

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

// 基数排序函数
void radixSort(std::vector<int>& arr) {
    int max = *std::max_element(arr.begin(), arr.end());
    int exp = 1;

    while (max / exp > 0) {
        countSort(arr, exp);
        exp *= 10;
    }
}

// 计数排序函数
void countSort(std::vector<int>& arr, int exp) {
    std::vector<int> output(arr.size());
    std::vector<int> count(10, 0);

    for (int num : arr) {
        count[(num / exp) % 10]++;
    }

    for (int i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    for (int i = arr.size() - 1; i >= 0; i--) {
        output[count[(arr[i] / exp) % 10] - 1] = arr[i];
        count[(arr[i] / exp) % 10]--;
    }

    arr = output;
}

int main() {
    std::vector<int> arr = {170, 45, 75, 90, 802, 24, 2, 66};

    std::cout << "排序前的数组为: ";
    for (int num : arr) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    radixSort(arr);

    std::cout << "排序后的数组为: ";
    for (int num : arr) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}
```

**Python 代码实现**：

```python
def radix_sort(arr):
    max_val = max(arr)
    exp = 1

    while max_val / exp > 0:
        count_sort(arr, exp)
        exp *= 10

def count_sort(arr, exp):
    output = [0] * len(arr)
    count = [0] * 10

    for num in arr:
        count[(num // exp) % 10] += 1

    for i in range(1, 10):
        count[i] += count[i - 1]

    for i in range(len(arr) - 1, -1, -1):
        output[count[(arr[i] // exp) % 10] - 1] = arr[i]
        count[(arr[i] // exp) % 10] -= 1

    arr = output

# 测试示例
arr = [170, 45, 75, 90, 802, 24, 2, 66]
radix_sort(arr)
print("排序后的数组:", arr)
```
