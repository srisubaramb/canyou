from agent import run_agent

while True:
    question = input("You : ")
    if question.lower() == "exit":
        break
        
    answer = run_agent(question)
    print(f"AI AGENT 🤖 : {answer}\n")