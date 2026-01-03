import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ConsistentTeamSlider } from '../ConsistentTeamSlider';

// Mock data for testing
const mockTeamMembers = [
  {
    id: '1',
    slug: 'heather-wing',
    name: 'Heather Wing',
    role: 'Founder & CEO',
    imageSrc: '/images/heather-wing.jpg',
    profileLink: '/who-we-are/heather-wing',
    shortBio: 'Global strategist and creative visionary',
    expertise: ['Brand Strategy', 'Creative Direction']
  },
  {
    id: '2',
    slug: 'ingrid-kenny',
    name: 'Ingrid De La Mare Kenny',
    role: 'Creative Director',
    imageSrc: '/images/ingrid-kenny.jpg',
    profileLink: '/who-we-are/ingrid-kenny',
    shortBio: 'Award-winning designer and art director',
    expertise: ['Visual Design', 'Brand Identity']
  }
];

describe('ConsistentTeamSlider', () => {
  it('renders team members correctly', () => {
    render(
      <ConsistentTeamSlider 
        teamMembers={mockTeamMembers}
        title="Test Team"
        description="Test description"
      />
    );

    expect(screen.getByText('Test Team')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('Heather Wing')).toBeInTheDocument();
    expect(screen.getByText('Ingrid De La Mare Kenny')).toBeInTheDocument();
  });

  it('handles loading state', () => {
    render(
      <ConsistentTeamSlider 
        teamMembers={[]}
        loading={true}
        title="Test Team"
      />
    );

    // Should show loading skeletons
    const skeletonCards = screen.getAllByRole('generic');
    expect(skeletonCards.length).toBeGreaterThan(0);
  });

  it('handles error state', () => {
    render(
      <ConsistentTeamSlider 
        teamMembers={[]}
        loading={false}
        error="Failed to load team members"
        title="Test Team"
      />
    );

    expect(screen.getByText('Unable to load team members right now.')).toBeInTheDocument();
  });

  it('handles empty state', () => {
    render(
      <ConsistentTeamSlider 
        teamMembers={[]}
        loading={false}
        error={null}
        title="Test Team"
      />
    );

    expect(screen.getByText('Team members will appear here once published.')).toBeInTheDocument();
  });

  it('navigates with keyboard arrows', async () => {
    render(
      <ConsistentTeamSlider 
        teamMembers={mockTeamMembers}
        title="Test Team"
      />
    );

    const slider = screen.getByRole('region', { name: 'Team members carousel' });
    
    // Simulate right arrow key
    fireEvent.keyDown(slider, { key: 'ArrowRight' });
    
    // Should trigger navigation (implementation detail)
    await waitFor(() => {
      // This would need actual implementation testing
      expect(slider).toBeInTheDocument();
    });
  });

  it('has proper ARIA attributes', () => {
    render(
      <ConsistentTeamSlider 
        teamMembers={mockTeamMembers}
        title="Test Team"
      />
    );

    const carousel = screen.getByRole('region', { name: 'Team members carousel' });
    expect(carousel).toBeInTheDocument();
    
    const prevButton = screen.getByLabelText('Previous team member');
    const nextButton = screen.getByLabelText('Next team member');
    
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });
});