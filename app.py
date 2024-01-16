from flask import Flask, render_template

app = Flask(__name__)

work_experience = [
    {
        'title': 'Cloud Computing Intern',
        'company': 'Whizlabs',
        'location': 'Remote',
        'start_date': '2023-04-01',
        'end_date': '',
        'description': "Effortlessly incorporated leading cloud services such as GKE, GCP Vertex AI, and various other cloud solutions into laboratory environments, enhancing user engagement through practical exposure to real cloud-based scenarios.\n" 
                        "Created CI/CD pipeline to build, test, and deploy internal tools on Google Cloud serverless platforms.\n"
                        "Played a key role in transitioning current deletion scripts to a highly efficient and scalable solution, leading to an impressive 67% reduction in resource deletion time. This endeavor not only eliminated potential errors but also delivered a substantial 39% cost reduction.\n"
                        "Developed a machine learning model that analyzes lab feedback data, enabling data-driven insights for optimizing future lab creation and curriculum enhancement.",
    },
]

education = [
    {}
]

skills = [
    {}
]

@app.route('/')
def index():
    return render_template('home.html', work_experience=work_experience)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)