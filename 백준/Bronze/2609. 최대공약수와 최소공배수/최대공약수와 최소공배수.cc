#include <iostream>

// 최대 공약수
int GetGCD(int a, int b)
{	
	for (int GCD = a % b; GCD != 0; GCD = a % b)
	{		
		a = b;
		b = GCD;
	}
	return b;
}

// 최소 공배수
int GetLCM(int a, int b, int GCD) { return a * b / GCD; }

int main()
{
	int a, b;
	std::cin >> a >> b;
	std::cout << GetGCD(a, b) << std::endl;
	std::cout << GetLCM(a, b, GetGCD(a, b)) << std::endl;
	return 0;
}