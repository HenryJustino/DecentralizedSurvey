/* tslint:disable */
import React from 'react';
import { Button, Form, Input, InputNumber, message } from 'antd';

// import SurveyArtifact from '@contracts/Survey.sol';

const { TextArea } = Input;

class TakeSurvey extends React.Component {
  constructor(props: {}) {
    super(props);

    this.onSubmitSurvey = this.onSubmitSurvey.bind(this);

    this.state = {
      forms: [
        {
          description: '',
          label: 'Name',
          type: 'text'
        },
        {
          description: '',
          label: 'Desc',
          type: 'textarea'
        },
        {
          description: '',
          label: 'Email',
          type: 'text'
        }
      ],
      name: 'ETH India',
      prevResponses: []
    };
  }

  // componentDidMount() {
  // const name = window.location.search.split('=')[1].replace('-', ' ');
  // this.setState({ name });

  // Survey.methods.surveyInfo(this.state.name).call().then((value) => {
  //   this.loadHash(value[ 1 ], value[ 2 ]);
  // });
  // this.loadHash('QmPP8FtsZRQD1duZrbsRti6TUrqtRvPKTtXYzHjDQkudBY');
  // }

  // loadHash(hash, previousSubmissionHash) {
  //   console.log(hash);
  //   console.log(previousSubmissionHash);
  //   EmbarkJS.Storage.get(hash)
  //     .then((content) => {
  //       const contentJson = JSON.parse(content);
  //       console.log(contentJson);
  //       this.setState({ forms: contentJson.forms });
  //       if (previousSubmissionHash.length > 1) {
  //         EmbarkJS.Storage.get(previousSubmissionHash)
  //           .then((content) => {
  //             const contentJson = JSON.parse(content);
  //             console.log(contentJson);
  //             this.setState({ prevResponses: contentJson.forms });
  //           })
  //           .catch((err) => {
  //             if (err) {
  //               console.log('Storage get Error => ' + err.message);
  //             }
  //           });
  //       }
  //     })
  //     .catch((err) => {
  //       if (err) {
  //         console.log('Storage get Error => ' + err.message);
  //       }
  //     });
  // }

  updateFormState(form, index, event) {
    let newForm = form;
    newForm['value'] = event.target.value;
    let forms = this.state.forms;
    forms[index] = newForm;
    this.setState({ forms });
    // console.log(this.state.forms);
  }

  onSubmitSurvey() {
    console.log(this.state);
    // EmbarkJS.Storage.saveText(JSON.stringify(this.state.forms))
    //   .then((hash) => {
    //     console.log(hash);
    //     let currentResponseHash = hash;
    //     let prevSubmissios = this.state.prevResponses;
    //     prevSubmissios.push(this.state.forms);
    //     this.setState({ prevResponses: prevSubmissios });
    //     EmbarkJS.Storage.saveText(JSON.stringify(this.state.prevResponses))
    //       .then((value) => {
    //         console.log(hash);
    //         Survey.methods.submitSurveyResponse(
    //           this.state.name,
    //           currentResponseHash,
    //           value
    //         ).send({ from: web3.eth.defaultAccount }).then((value) => {
    //           message.success('Response submitted successfully');
    //         });
    //       })
    //       .catch((err) => {
    //         if (err) {
    //           message.error('There was an error: ' + err.message);
    //         }
    //       });
    //   })
    //   .catch((err) => {
    //     if (err) {
    //       message.error('There was an error: ' + err.message);
    //     }
    //   });
  }

  render() {
    return (
      <div style={{ padding: '0 20%' }}>
        <h1 className="text-center"> {this.state.name} </h1>
        {this.state.forms.map((form, index) => {
          return (
            <div key={index} className="m-top-30">
              <h3 className="label">{form.label}</h3>
              {form.description && (
                <p className="description">{form.description}</p>
              )}
              {form.type === 'text' && (
                <Input
                  name="label"
                  type="text"
                  onChange={this.updateFormState.bind(this, form, index)}
                />
              )}
              {form.type === 'phoneNumber' && (
                <InputNumber
                  min={1}
                  max={10}
                  onChange={this.updateFormState.bind(this, form, index)}
                />
              )}
              {form.type === 'textarea' && (
                <TextArea
                  rows={4}
                  onChange={this.updateFormState.bind(this, form, index)}
                />
              )}
            </div>
          );
        })}
        <div className="take-survey-submit">
          <Button size="large" type="primary" onClick={this.onSubmitSurvey}>
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default TakeSurvey;