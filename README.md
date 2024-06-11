# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

<!-- 
JAVA inhertance

import java.util.Scanner;

public class Personal {
    private static String name;
    private static String enrollment_no;
    private static String branch;
    private static int mobile_no;
    private static String email_id;

    public static void getPersonalInfo() {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter name: ");
        name = input.next();
        System.out.print("Enter enrollment number: ");
        enrollment_no = input.next();
        System.out.print("Enter branch: ");
        branch = input.next();
        System.out.print("Enter mobile number: ");
        mobile_no = input.nextInt();
        System.out.print("Enter email id: ");
        email_id = input.next();
        input.close();
    }

    public static void showPersonalInfo() {
        System.out.println("Name: " + name);
        System.out.println("Branch: " + branch);
        System.out.println("Mobile Number: " + mobile_no);
        System.out.println("Email ID: " + email_id);
    }

    public static void main(String[] args) {
        Personal.getPersonalInfo();
        Personal.showPersonalInfo();
    }
}
___________________________________________________________________________________

import java.util.Scanner;

public class AcademicInfo {
    private int M3;
    private int ADA;
    private int SE;
    private int COA;
    private int OS;
    private int total;
    private double percentage;
    private String result;

    public void getAcademicInfo() {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter marks for M3: ");
        M3 = input.nextInt();
        System.out.print("Enter marks for ADA: ");
        ADA = input.nextInt();
        System.out.print("Enter marks for SE: ");
        SE = input.nextInt();
        System.out.print("Enter marks for COA: ");
        COA = input.nextInt();
        System.out.print("Enter marks for OS: ");
        OS = input.nextInt();
        input.close();
    }

    public void showAcademicInfo() {
        System.out.println("M3 Marks: " + M3);
        System.out.println("ADA Marks: " + ADA);
        System.out.println("SE Marks: " + SE);
        System.out.println("COA Marks: " + COA);
        System.out.println("OS Marks: " + OS);
        
        total = M3 + ADA + SE + COA + OS;
        
        System.out.println("Total Marks: " + total);
        
        percentage = ((double) total / 350) * 100;
        
        System.out.printf("Percentage obtained: %.3f%%\n", percentage, "%");
        
        if (percentage >= 60) {
            result = "Pass";
        } else {
            result = "Fail";
        }
        
        System.out.println("Result: " + result);

    }

    public static void main(String[] args) {
        AcademicInfo student = new AcademicInfo();
        student.getAcademicInfo();
        student.showAcademicInfo();
    }
}
_________________________________________________________________________


import java.util.Scanner;

public class Sport {
    private static int s_weight;
    private static int s_height;
    private static String s_sport_name;

    public static void getPersonalInfo() {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter your weight: ");
        s_weight = input.nextInt();
        System.out.print("Enter your height: ");
        s_height = input.nextInt();
        System.out.print("Enter Sport name: ");
        s_sport_name = input.next();
        input.close();
    }

    public void displayInfo() {
        System.out.println("Sport: " + s_sport_name);
        System.out.println("Weight: " + s_weight + " kg");
        System.out.println("Height: " + s_height + " cm");
    }

    public static void main(String[] args) {
        Sport.getPersonalInfo();
        Sport sport = new Sport();
        sport.displayInfo();
    }
} -->



<!------------------------------------------>
<!-- 
Enter the number of jobs: 5
Enter the deadline followed by the profit of each job respectively:
Job 1 :
2
60
Job 2 :
1
100
Job 3 :
3
20
Job 4 :
2
40
Job 5 :
1
20
The maximum profit that could be earned is: 180


=== Code Execution Successful -->