import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import * as React from 'react';

class User extends React.Component<{ params: any }, { user: any, value: number }> {

    constructor(p) {
        super(p);
        this.state = { user:{}, value: 0 };
    }

    public componentDidMount() {
        fetch(`https://api.github.com/users/primefaces`)
            .then(response => response.json())
            .then(
                user => {
                    this.setState({ user });
                }
            );
    }
    public handleChange = (event: React.ChangeEvent, value: number) => {
        this.setState({ value });
    };
    public renderStatistikk(statistikk) {
        return (
            <Tab key={statistikk.name} label={statistikk.name}  >{statistikk.name}</Tab>
        );
    }

    public render() {
        if (!this.state.user) {
            return (<div >Laster...</div>);
        }

        const user = this.state.user;

        const statistikk = [
            {
                name: 'Public Repos',
                url: `/user/primefaces/repos`,
                value: user.public_repos

            },
            {
                name: 'Followers',

                url: `/user/primefaces/followers`,
                value: user.followers
            },
            {
                name: 'Following',

                url: `/user/primefaces/following`,
                value: user.following
            }
        ];

        return (
            <div >
                <div >
                    <img src={user.avatar_url} alt={`${user.login} avatar`} />
                    <h2 >{user.login} ({user.name})</h2>
                    <p >{user.bio}</p>

                    <ul >
                        <AppBar position="sticky">
                            <Tabs value={this.state.value} onChange={this.handleChange}>
                                {statistikk.map(this.renderStatistikk)}
                            </Tabs>
                        </AppBar>
                    </ul >
                </div>
            </div>
        );
    }
};

export default User;