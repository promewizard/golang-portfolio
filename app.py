from flask import Flask, render_template

app = Flask(__name__)

work_experience = [
    {
        'title': 'Cloud Computing Intern',
        'company': 'Whizlabs',
        'location': 'Remote',
        'start_date': 'April 2023',
        'end_date': '',
        'description': "Effortlessly incorporated leading cloud services such as GKE, GCP Vertex AI, and various other cloud solutions into laboratory environments, enhancing user engagement through practical exposure to real cloud-based scenarios.\n" 
                        "Created CI/CD pipeline to build, test, and deploy internal tools on Google Cloud serverless platforms.\n"
                        "Played a key role in transitioning current deletion scripts to a highly efficient and scalable solution, leading to an impressive 67% reduction in resource deletion time. This endeavor not only eliminated potential errors but also delivered a substantial 39% cost reduction.\n"
                        "Developed a machine learning model that analyzes lab feedback data, enabling data-driven insights for optimizing future lab creation and curriculum enhancement.",
    },
]

education_details = [
    {
        'institution': "Shri Mata Vaishno Devi University",
        'start-year' : "2020",
        'degree': "Bachelor of Technology",
        'major': "Electronics and Communication Engineering",
        'end-year' : "",
    }
]

skills = ["Python", "C++", "Java", "HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "SQL", "Git", "Linux", "Docker", "Kubernetes", "AWS", "GCP", "Azure", "Tensorflow", "PyTorch"
]

@app.route('/')
def index():
    return render_template('home.html', work_experience=work_experience
                           , education_details=education_details
                           ,skills=skills)

@app.route('/certificates')
def certificates():
    return render_template('certificates.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)