#include <iostream>
#include <bits/stdc++.h>
using namespace std;
#define NA -1

//1.Given an array A[] and a number x, check for pair in A[] with sum as x
bool chkPair(int arr[], int size, int x)
{
    for (int i = 0; i < size; i++)
    {
        for (int j = i + 1; j < size; j++)
        {
            if (i != j && arr[i] + arr[j] == x)
            {
                cout << arr[i] << " " << arr[j] << endl;
                return true;
            }
        }
    }
    return false;
}

//2.Merge an array of size n into another array of size m+n
int merge(int mPlusN[], int N[], int m, int n)
{
    int arr[m + n];
    int j = 0;
    for (int i = 0; i < m + n; i++)
    {
        if (mPlusN[i] != NA)
        {
            // cout << arr[i] << " " << i << endl;
            arr[i] = mPlusN[i];
        }
        else
        {

            arr[i] = N[j];
            j++;
        }
    }
    sort(arr, arr + n + m);
    for (int i = 0; i < m + n; i++)
    {
        cout << arr[i] << " ";
    }
}

//3. reverse
/*Function to left rotate arr[] of size n by d*/
void leftRotateOne(int arr[], int d)
{
    int j = arr[0];
    // int arr2[d + n];

    for (int i = 0; i < d - 1; i++)
    {
        arr[i] = arr[i + 1];
    }
    arr[d - 1] = j;

    // cout << arr2[1] << " d "<<d;
}
void leftRotateByN(int arr[], int d, int n)
{
    for (int i = 0; i < n; i++)
    {
        leftRotateOne(arr, d);
    }
    for (int i = 0; i < d; i++)
    {
        cout << arr[i] << " ";
    }
}

//

int main()
{
    // int A[] = {0, -1, 2, -3, 1, -4};
    int A[] = {0, 1, 2, 3, 4, 5, 6, 7};
    int x = -2;
    int size = sizeof(A) / sizeof(A[0]);

    // int mPlusN[] = {2, 8, NA, NA, NA, 13, NA, 15, 20};
    // int N[] = {5, 7, 9, 25};
    // int n = sizeof(N) / sizeof(N[0]);
    // int m = sizeof(mPlusN) / sizeof(mPlusN[0]) - n;
    // int arr[m + n];
    // merge(mPlusN, N, n, m);

    // if(chkPair(A, size, x)){
    //     cout<<"exists valid pair";
    // }else{
    //     cout << "doesent exists valid pair";
    // }

    // rvereseArray(A, 0, n);
    // cout<<size<<endl;

    // leftRotateByN(A, size, 3);

    // for(int i=size-1;i>=0;i--){
    //     cout<<A[i]<<" ";
    // }
    // int pos=3;
    // for (int i = size; i >= pos; i++)
    // {
    //     A[i] =A[i-1];
    // }
    // // A[pos] = 11;
    // size++;
    // cout << size << " ";
    // for(int i=0;i<size;i++){
    //     cout<<size<<" ";
    // }
    return 0;
}