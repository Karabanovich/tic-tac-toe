class TicTacToe {
    constructor() {
    	this.n=0;
    	this.array=new Array();
    	for(var i=0;i<9;i++)
    		this.array[i]=0;
    }

    getCurrentPlayerSymbol() {
    	if(this.n%2==0)
    		return 'x';
    	else
    		return 'o';
    }

    nextTurn(rowIndex, columnIndex) {
    	if(this.array[rowIndex*3+columnIndex]==0)
    	{
    		if(this.n%2==0)
    			this.array[rowIndex*3+columnIndex]=1;
    		else
    			this.array[rowIndex*3+columnIndex]=-1;
    		this.n++;
    	}
    }

    isFinished() {
    	return this.n==9||this.getWinner()!=null;
    }

    getWinner() {
    	var s;
    	for(var i=0;i<3;i++)
    	{
    		s=0;
    		for(var j=0;j<3;j++)
    		{
    			s+=this.array[i*3+j]
    		}
    		if (s==3)
    			return 'x';
    		if (s==-3)
    			return 'o';
    	}
    	for(var i=0;i<3;i++)
    	{
    		s=0;
    		for(var j=0;j<3;j++)
    		{
    			s+=this.array[i+j*3]
    		}
    		if (s==3)
    			return 'x';
    		if (s==-3)
    			return 'o';
    	}
    	s=this.array[0]+this.array[4]+this.array[8];
    	if (s==3)
    		return 'x';
    	if (s==-3)
    		return 'o';
    	s=this.array[2]+this.array[4]+this.array[6];
    	if (s==3)
    		return 'x';
    	if (s==-3)
    		return 'o';
    	return null;


    }

    noMoreTurns() {
    	return this.n==9;
    }

    isDraw() {
    	return this.n==9&&this.getWinner()==null;
    }

    getFieldValue(rowIndex, colIndex) {
    	if(this.array[rowIndex*3+colIndex]==1)
    		return 'x';
    	if(this.array[rowIndex*3+colIndex]==-1)
    		return 'o';
    	return null;
    }
}

module.exports = TicTacToe;
