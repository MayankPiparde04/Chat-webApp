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
<!-- 
#include <iostream>
#include <vector> // Vector for pairs
#include <queue>
#include <climits>// limit for INT_MAX
using namespace std;

class Graph {// class graph
private:
    int V;
    vector<vector<pair<int, int>>> vertex;// pair for vertex with its source and destination

public:
    Graph(int vertices) : V(vertices), vertex(vertices) {}// graph with node and other pair of vertex

    void assignEdge(int source, int destination, int weight) {
        vertex[source].push_back({ destination, weight });//forward 
        vertex[destination].push_back({ source, weight });//backward
    }

    void primsAlgo() {
        priority_queue<pair<int, int>,//priority queue with two data of vector and greator for comparision
            vector<pair<int, int>>,// vector which have a key and its value
            greater<pair<int, int>>> pq;// another vector which have a parent key and its value for comparision

        vector<int> key(V, INT_MAX), parent(V, -1);// key vector and its parent/source vector
        vector<bool> inMST(V, false);// mst for checking availability

        pq.push({ 0, 0 });// initial value
        key[0] = 0;// initial value

        while (!pq.empty()) {// loop till queue is empty
            int u = pq.top().second;
            pq.pop();

            inMST[u] = true;

            for (const auto& [v, weight] : vertex[u]) {// comparison 
                if (!inMST[v] && weight < key[v]) {// if the node is not present in mst and the value is alredy minimum to current node
                    parent[v] = u;//assining source to parent node
                    key[v] = weight;//assining weight to parent node
                    pq.push({ key[v], v });// pushing node to pq for further comparison
                }
            }
        }

        for (int i = 1; i < V; ++i) {//printing of mst
            cout << "Edge = "<< parent[i] << " ---- " << i << " : "<<" Weight " << key[i] << endl;
        }
    }
};

int main() {
    int V, E;
    cout << "Enter the number of vertices : ";//Vertex input
    cin >> V ;
    cout << "Enter the number of edges : ";//Edge input
    cin >> E ;

    Graph graph(V);//parameterize object

    int source, destination, weight;
    for (int i = 0; i < E; ++i) {
        cout << "Enter source of edges " << i+1 << " : "<< endl;//parent/source input
        cin >> source;
        cout << "Enter destination of edges " << i+1 << " : "<< endl;//destination input
        cin >> destination;
        cout << "Enter weight of edges " << i+1 << " : "<< endl;//weight input
        cin >> weight;
        graph.assignEdge(source, destination, weight);//direction creation
    }

    graph.primsAlgo();//main prims algorithm

    return 0;
} -->
<!-- 
#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric> // for accumulate
#include <iomanip> // for setprecision
using namespace std;

void fcfs(vector<string>& p_name, vector<int>& ar_time, vector<int>& br_time) {
    int n = p_name.size();
    vector<int> cp_time(n);
    vector<int> wt_time(n);
    vector<int> ta_time(n);

    cp_time[0] = br_time[0];
    for (int i = 1; i < n; i++) {
        cp_time[i] = cp_time[i - 1] + br_time[i];
    }

    for (int i = 0; i < n; i++) {
        ta_time[i] = cp_time[i] - ar_time[i];
        wt_time[i] = ta_time[i] - br_time[i];
    }

    cout << "Process||Arrival Time||Burst Time||Completion Time||Turnaround Time||Waiting Time\n";
    for (int i = 0; i < n; i++) {
        cout << "\t" <<p_name[i] << "\t\t " << ar_time[i] << "\t\t\t " << br_time[i] << "\t\t\t\t "<< cp_time[i] << "\t\t\t\t " << ta_time[i] << "\t\t\t " << wt_time[i] << "\n";
    }

    double avg_waiting_time = accumulate(wt_time.begin(), wt_time.end(), 0.0) / n;
    cout << "\nAverage Waiting Time: " << fixed << setprecision(2) << avg_waiting_time << endl;
}

int main() {
    int n;
    cout << "Enter the number of processes: ";
    cin >> n;

    vector<string> p_name(n);
    vector<int> ar_time(n);
    vector<int> br_time(n);

    for (int i = 0; i < n; i++) {
        cout << "Enter Process " << i + 1 << " Name: ";
        cin >> p_name[i];
        cout << "Enter Arrival & Burst Time: ";
        cin >> ar_time[i] >> br_time[i];
    }
    
    vector<pair<int, pair<string, int>>> processes;
    for (int i = 0; i < n; i++) {
        processes.push_back({ar_time[i], {p_name[i], br_time[i]}});
    }

    sort(processes.begin(), processes.end());

    for (int i = 0; i < n; i++) {
        p_name[i] = processes[i].second.first;
        ar_time[i] = processes[i].first;
        br_time[i] = processes[i].second.second;
    }
    cout<<"Name: Mayank Piparde\nClass: CSE\nRoll. no.: 0827CS221160\n";

    fcfs(p_name, ar_time, br_time);

    return 0;
}


____________________________________________

#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>
#include <iomanip> // for setprecision
using namespace std;

void sjf(vector<string>& names, vector<int>& ar_time, vector<int>& br_time) {
    int n = names.size();
    vector<int> cp_time(n); // Completion Time
    vector<int> wt_time(n); // Waiting Time
    vector<int> ta_time(n); // Turnaround Time

    vector<pair<int, pair<string, int>>> processes;
    for (int i = 0; i < n; i++) {
        processes.push_back({ar_time[i], {names[i], br_time[i]}});
    }

    sort(processes.begin(), processes.end());

    cp_time[0] = processes[0].second.second;
    wt_time[0] = 0;

    for (int i = 1; i < n; i++) {
        int endTime = cp_time[i - 1] + processes[i].second.second;
        cp_time[i] = endTime;
        ta_time[i] = endTime - processes[i].first;
        wt_time[i] = ta_time[i] - processes[i].second.second;
        if (wt_time[i] < 0) {


            wt_time[i] = 0;
        }
    }

    double avg_wt_time = accumulate(wt_time.begin(), wt_time.end(), 0.0) / n;

    cout << "Process||Arrival Time||Burst Time||Completion Time||Turnaround Time||Waiting Time\n";
    for (int i = 0; i < n; i++) {
        cout << "\t" << processes[i].second.first << "\t\t\t" << processes[i].first << "\t\t\t" << processes[i].second.second << "\t\t\t"
             << cp_time[i] << "\t\t\t" << ta_time[i] << "\t\t\t" << wt_time[i] << "\n";
    }

    cout << "\nAverage Waiting Time: " << fixed << setprecision(2) << avg_wt_time << endl;
}

int main() {
    int n;
    cout << "Enter the number of processes: ";
    cin >> n;

    vector<string> names(n);
    vector<int> ar_time(n);
    vector<int> br_time(n);

    for (int i = 0; i < n; i++) {
        cout << "Enter Process " << i + 1 << " Name: ";
        cin >> names[i];
        cout << "Enter Arrival & Burst Time : ";
        cin >> ar_time[i] >> br_time[i];
    }
    cout<<"Name: Mayank Piparde\nClass: CSE\nRoll. no.: 0827CS221160\n";
    
    sjf(names, ar_time, br_time);

    return 0;
}
 -->
<!-- ### Feasibility Report

#### 1. Executive Summary:
In this section, we will write what purpose our project serves, what services this project intends to provide, why this project is needed, and a brief description of the project.

#### 2. Description of Product/Project:
In this section, we will write all the technical aspects of our project, what section of the audience it will target, and the scope and limitations of the project.

#### 3. Technical Considerations:
In this section, we will write what technologies, languages, and resources are required for the project development. Also, if domain expertise is required, what supporting libraries we will use in this project, and if third-party software is involved.

#### 4. Product Market List:
In this section, we will write who our target audience is, how this project will be released, if there is a need for such a project, and at what price this project can be sold.

#### 5. Marketing Strategies:
In this section, we'll write how we are going to promote our project/product, what type of media we are going to use, such as social media, promotional events, press conferences, online marketing or digital marketing, paper pamphlets, and how these marketing mediums will affect product sales.

#### 6. Organization and Staffing:
In this section, we will demonstrate if there is a lack of resources, shortage of manpower (developers/domain experts, etc.), resources like hardware (IoT sensors and/or system resources) are required, and how the lack of manpower will be resolved, such as hiring persons, internships, leasing, or freelancing.

#### 7. Schedule:
In this section, we will mention in how many days this project will be completed. If the negotiated time or schedule with the customer is enough, if more time is required, it should be negotiated with the customer. What will be the time of the product release or product delivery.

#### 8. Financial Projection or Finance:
In this section, we will write the financial dependency of the project on the stakeholders. If the negotiated budget is enough, it should be negotiated with the customer for a larger budget if necessary.

#### 9. Findings and Recommendations:
In this section, we will write that after considering all the above points, if this project can be taken into consideration, if this project is financially good for the company, if it satisfies all the stakeholders, and if the project can be done within the given budget and time.

### Formatting Specifications
- **Title**: 20px
- **Heading**: 16px
- **Sub-heading**: 14px
- **Normal Text**: 12px
- **Font Family**: Times New Roman, Arial, Cambria
- **Text Alignment**: Justified -->