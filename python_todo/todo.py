import tkinter as tk

root = tk.Tk()
root.geometry("300x200+300+200") #position on screen
root.configure(bg='#FFFACD')
root.title("My To-Do List")
root.attributes("-topmost", True) #show over other apps

def start_move(event):
    root.x = event.x
    root.y = event.y

def do_move(event):
    x = event.x_root - root.x
    y = event.y_root - root.y
    root.geometry(f"+{x}+{y}")

# Frame principale con padding
frame = tk.Frame(root, bg="#FFFACD", padx=10, pady=10)
frame.pack(expand=True, fill="both")

frame.bind("<Button-1>", start_move)
frame.bind("<B1-Motion>", do_move)

# Container per le checkbox
task_frame = tk.Frame(frame, bg="#FFFACD")
task_frame.pack(fill="both", expand=True)

# Funzione per aggiungere nuovi task
def add_task():
    task = entry.get().strip()
    if task:
        var = tk.BooleanVar()
        chk = tk.Checkbutton(task_frame, text=task, variable=var, bg="#FFFACD", anchor="w")
        chk.pack(fill="x", pady=2)
        entry.delete(0, 'end')

# input task and insert button
entry = tk.Entry(frame, font=("Arial", 10))
entry.pack(fill="x", pady=(0, 5))

add_btn = tk.Button(frame, text="Add New Task", command=add_task, bg="#34d8eb", bd=0)
add_btn.pack(fill="x")

root.mainloop()
