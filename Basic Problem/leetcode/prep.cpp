#include <iostream>
#include <bits/stdc++.h>
using namespace std;

// 1.Find the largest element of a given array of integers
int find_largest(int nums[], int n)
{
    int temp = nums[0], p = nums[1];
    for (int i = 1; i < n; i++)
    {
        if (temp < p)
        {
            temp = p;
            p = nums[i + 1];
        }
        else
        {
            p = nums[i + 1];
        }
        // cout<<temp<<" "<<p<<endl;
    }
    return temp;
}

// 2.Find the largest three elements in an array
void three_largest(int arr[], int arr_size)
{
    int first, second, third;
    first = second = third = arr[0];
    if (arr_size < 3)
        return;

    for (int i = 0; i < arr_size; i++)
    {
        if (arr[i] > first)
        {
            third = second;
            second = first;
            first = arr[i];
        }
        else if (arr[i] > second)
        {
            third = second;
            second = arr[i];
        }
        else
        {
            third = arr[i];
        }
    }
    cout << first << " " << second << " " << third << endl;
}

// 3.Find all elements in array of integers which have at-least two greater elements
int find_greater_elements(int nums[], int n)
{
    sort(nums, nums + n);
    for (int i = 0; i < n - 2; ++i)
        cout << nums[i] << " ";
}

//4.Find the next greater element of every element of a given array of integers
void next_greater(int nums[], int n)
{
    int temp = nums[0];
    for (int i = 0; i < n; i++)
    {
        for (int j = i + 1; j <= n; j++)
        {
            if (nums[i] < nums[j])
            {
                if (temp < nums[j])
                {
                    temp = nums[j];
                    cout << nums[i] << " " << nums[j] << endl;
                    break;
                }
                else
                {
                    // temp = nums[j];
                    cout << nums[i] << " " << temp << endl;
                    break;
                }
            }
        }
    }
}

//5. Separate even and odd numbers of an array of integers. Put all even numbers first, and then odd numbers
void segregateEvenOdd(int nums[], int size)
{
    int newArr[size];
    int j = 0;
    for (int i = 0; i < size; i++)
    {
        if (nums[i] % 2 == 0)
        {
            newArr[j] = nums[i];
            j++;
        }
    }
    for (int i = 0; i < size; i++)
    {
        if (nums[i] % 2 == 1)
        {
            newArr[j] = nums[i];
            j++;
        }
    }

    for (int i = 0; i < size; i++)
    {
        cout << newArr[i] << " ";
    }
}

// 6.Arrange the numbers of a given array in a way that the sum of some numbers equal the largest number in the array
void array_addition_1(int arr[], int array_size)
{
    int largest, sum = 0;
    largest = find_largest(arr, array_size);
    // cout<<largest;
    for (int i = 0; i < array_size; i++)
    {
        sum += arr[i];
    }
    sum = sum - largest;
    if (sum == largest)
    {
        cout << "true ";
    }
    else
    {
        cout << "false ";
    }
    cout << sum;
}

//7.Count the number of occurrences of given number in a sorted array of integers
int count_occurrences(int arr[], int n, int x)
{
    int count = 0;
    for (int i = 0; i < n; i++)
    {
        if (arr[i] == x)
        {
            count++;
        }
    }
    return count;
}

//

int main()
{
    // int nums[] = {7, 12, 30, 15, 19, 32, 56, 70};
    int nums[] = {2, 2, 4, 6, 7, 2, -2};

    int numberOfElements = sizeof(nums) / sizeof(nums[0]);

    // cout<<find_largest(nums,numberOfElements);
    //  three_largest(nums, numberOfElements);
    // find_greater_elements(nums, numberOfElements);
    // next_greater(nums, numberOfElements);
    // segregateEvenOdd(nums, numberOfElements);
    // array_addition_1(nums, numberOfElements);
    // cout << count_occurrences(nums, numberOfElements, 7);
    // cout<<numberOfElements;
    return 0;
}
