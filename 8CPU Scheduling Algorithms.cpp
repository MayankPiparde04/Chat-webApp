//8.Write a program to compare various CPU Scheduling Algorithms over different Scheduling Criteria.
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Process {
    int pid;
    int arrival_time;
    int burst_time;
    int priority;
};

float first_come_first_serve(vector<Process>& processes, float& turnaround_time) {
    int current_time = 0;
    float total_waiting_time = 0;
    for (const auto& proc : processes) {
        total_waiting_time += max(0, current_time - proc.arrival_time);
        turnaround_time += current_time + proc.burst_time - proc.arrival_time;
        current_time += proc.burst_time;
    }
    return total_waiting_time / processes.size();
}

float shortest_job_first(vector<Process>& processes, float& turnaround_time) {
    sort(processes.begin(), processes.end(), [](const Process& a, const Process& b) {
        return a.burst_time < b.burst_time;
    });

    int current_time = 0;
    float total_waiting_time = 0;
    for (const auto& proc : processes) {
        total_waiting_time += max(0, current_time - proc.arrival_time);
        turnaround_time += current_time + proc.burst_time - proc.arrival_time;
        current_time += proc.burst_time;
    }
    return total_waiting_time / processes.size();
}

float priority_scheduling(vector<Process>& processes, float& turnaround_time) {
    sort(processes.begin(), processes.end(), [](const Process& a, const Process& b) {
        return a.priority < b.priority;
    });

    int current_time = 0;
    float total_waiting_time = 0;
    for (const auto& proc : processes) {
        total_waiting_time += max(0, current_time - proc.arrival_time);
        turnaround_time += current_time + proc.burst_time - proc.arrival_time;
        current_time += proc.burst_time;
    }
    return total_waiting_time / processes.size();
}

float round_robin(vector<Process>& processes, int time_quantum, float& turnaround_time) {
    vector<int> remaining_burst_times(processes.size());
    for (size_t i = 0; i < processes.size(); ++i) {
        remaining_burst_times[i] = processes[i].burst_time;
    }

    int current_time = 0;
    float total_waiting_time = 0;
    while (true) {
        bool done = true;
        for (size_t i = 0; i < processes.size(); ++i) {
            if (remaining_burst_times[i] > 0) {
                done = false;
                if (remaining_burst_times[i] <= time_quantum) {
                    total_waiting_time += max(0, current_time - processes[i].arrival_time);
                    turnaround_time += current_time + remaining_burst_times[i] - processes[i].arrival_time;
                    current_time += remaining_burst_times[i];
                    remaining_burst_times[i] = 0;
                } else {
                    total_waiting_time += max(0, current_time - processes[i].arrival_time);
                    current_time += time_quantum;
                    remaining_burst_times[i] -= time_quantum;
                }
            }
        }
        if (done)
            break;
    }
    return total_waiting_time / processes.size();
}

int main() {
    int n, time_quantum;
    cout << "Enter the number of processes: ";
    cin >> n;

    vector<Process> processes(n);

    cout << "Enter details for each process (PID, Arrival Time, Burst Time, Priority):\n";
    for (int i = 0; i < n; i++) {
        cout << "Process " << i + 1 << ": ";
        cin >> processes[i].pid >> processes[i].arrival_time >> processes[i].burst_time >> processes[i].priority;
    }

    cout << "Enter the time quantum for Round Robin: ";
    cin >> time_quantum;

    float avg_waiting_fcfs, avg_waiting_sjf, avg_waiting_priority, avg_waiting_rr;
    float turnaround_fcfs = 0, turnaround_sjf = 0, turnaround_priority = 0, turnaround_rr = 0;

    avg_waiting_fcfs = first_come_first_serve(processes, turnaround_fcfs);
    avg_waiting_sjf = shortest_job_first(processes, turnaround_sjf);
    avg_waiting_priority = priority_scheduling(processes, turnaround_priority);
    avg_waiting_rr = round_robin(processes, time_quantum, turnaround_rr);

    float min_avg_waiting = avg_waiting_fcfs;
    string min_avg_waiting_algo = "First Come First Serve";

    if (avg_waiting_sjf < min_avg_waiting) {
        min_avg_waiting = avg_waiting_sjf;
        min_avg_waiting_algo = "Shortest Job First";
    }
    if (avg_waiting_priority < min_avg_waiting) {
        min_avg_waiting = avg_waiting_priority;
        min_avg_waiting_algo = "Priority Scheduling";
    }
    if (avg_waiting_rr < min_avg_waiting) {
        min_avg_waiting = avg_waiting_rr;
        min_avg_waiting_algo = "Round Robin";
    }

    float min_avg_turnaround = turnaround_fcfs / n;
    string min_avg_turnaround_algo = "First Come First Serve";

    if (turnaround_sjf / n < min_avg_turnaround) {
        min_avg_turnaround = turnaround_sjf / n;
        min_avg_turnaround_algo = "Shortest Job First";
    }
    if (turnaround_priority / n < min_avg_turnaround) {
        min_avg_turnaround = turnaround_priority / n;
        min_avg_turnaround_algo = "Priority Scheduling";
    }
    if (turnaround_rr / n < min_avg_turnaround) {
        min_avg_turnaround = turnaround_rr / n;
        min_avg_turnaround_algo = "Round Robin";
    }

    cout << "\nAverage Waiting Times:\n";
    cout << "First Come First Serve: " << avg_waiting_fcfs << endl;
    cout << "Shortest Job First: " << avg_waiting_sjf << endl;
    cout << "Priority Scheduling: " << avg_waiting_priority << endl;
    cout << "Round Robin: " << avg_waiting_rr << endl;

    cout << "\nTurnaround Times:\n";
    cout << "First Come First Serve: " << turnaround_fcfs / n << endl;
    cout << "Shortest Job First: " << turnaround_sjf / n << endl;
    cout << "Priority Scheduling: " << turnaround_priority / n << endl;
    cout << "Round Robin: " << turnaround_rr / n << endl;

    cout << "\nMinimum Average Waiting Time: " << min_avg_waiting_algo << ", " << min_avg_waiting << endl;
    cout << "Minimum Average Turnaround Time: " << min_avg_turnaround_algo << ", " << min_avg_turnaround << endl;

    return 0;
}
